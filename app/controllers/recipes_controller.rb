class RecipesController < ApplicationController
  def index
    ingredients = params[:ingredients]
    recipes = ingredients.present? ? Recipe.search_by_ingredients(ingredients) : Recipe.all
    render json: recipes, include: :ingredients
  rescue => e
    Rails.logger.error "Error fetching recipes: #{e.message}"
    render json: { error: "Error fetching recipes" }, status: 500
  end
end
