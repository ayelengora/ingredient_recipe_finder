class Ingredient < ApplicationRecord
  has_many :recipe_ingredients, dependent: :destroy
  has_many :recipes, through: :recipe_ingredients

  # Evitar duplicación de ingredientes
  validates :name, uniqueness: true
end
