class Recipe < ApplicationRecord
  has_many :recipe_ingredients, dependent: :destroy
  has_many :ingredients, through: :recipe_ingredients

  # Método para buscar recetas por coincidencia parcial en los ingredientes
  def self.search_by_ingredient(keyword)
    joins(:ingredients).where("ingredients.name ILIKE ?", "%#{keyword}%").distinct
  end
end
