class RecipesController < ApplicationController
  def index
    ingredient = params[:ingredient]
    recipes = ingredient.present? ? Recipe.search_by_ingredient(ingredient) : Recipe.all
    render json: recipes, include: :ingredients
  end

  def show
    recipe = Recipe.find(params[:id])
    render json: recipe, include: :ingredients
  end
end
