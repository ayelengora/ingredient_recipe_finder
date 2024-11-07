class RecipesController < ApplicationController
  def index
    recipes = fetch_recipes(params[:ingredients])
    render json: recipes, include: :ingredients
  end

  private

  def fetch_recipes(ingredients)
    if ingredients.present?
      Recipe.search_by_ingredients(ingredients)
    else
      Recipe.all
    end
  rescue => e
    Rails.logger.error "Error fetching recipes: #{e.message}"
    render json: { error: "Error fetching recipes" }, status: :internal_server_error
  end
end
