
class Recipe < ApplicationRecord
  has_many :recipe_ingredients
  has_many :ingredients, through: :recipe_ingredients

  def self.search_by_ingredients(ingredients)
    # Prepare each ingredient term for a partial match
    ingredients_array = ingredients.split(",").map { |ingredient| "%#{ingredient.strip}%" }
    Rails.logger.debug "Processed Ingredients Array for Partial Match: #{ingredients_array}"

    # Build the SQL to match with the ingredient
    recipes = joins(:ingredients)
              .where(ingredients_array.map { "ingredients.name ILIKE ?" }.join(" OR "), *ingredients_array)
              .group("recipes.id")
              .select("recipes.*, COUNT(ingredients.id) AS matched_ingredients_count")
              .order("matched_ingredients_count DESC")

    recipes
  end
end
