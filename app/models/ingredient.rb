class Ingredient < ApplicationRecord
  has_many :recipe_ingredients, dependent: :destroy
  has_many :recipes, through: :recipe_ingredients

  # Avoid duplication of ingredients
  validates :name, uniqueness: true
end
