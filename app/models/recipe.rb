class Recipe < ApplicationRecord
  has_many :recipe_ingredients
  has_many :ingredients, through: :recipe_ingredients

  def self.search_by_ingredients(ingredients)
    ingredients_array = parse_ingredients(ingredients)
    find_recipes_by_ingredients(ingredients_array)
  end

  private

      # Prepare each ingredient term for a partial match
  def self.parse_ingredients(ingredients)
    ingredients.split(",").map { |ingredient| "%#{ingredient.strip}%" }
  end

    # Build the SQL to match with the ingredient
  def self.find_recipes_by_ingredients(ingredients_array)
    joins(:ingredients)
      .where(ingredients_array.map { "ingredients.name ILIKE ?" }.join(" OR "), *ingredients_array)
      .group("recipes.id")
      .select("recipes.*, COUNT(ingredients.id) AS matched_ingredients_count")
      .order("matched_ingredients_count DESC")
      .limit(40)
  end
end

