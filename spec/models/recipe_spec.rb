require 'rails_helper'

RSpec.describe Recipe, type: :model do
  describe ".search_by_ingredients" do
    # Set up sample data for testing
    let!(:recipe1) { Recipe.create(title: "Tomato Pasta") }
    let!(:recipe2) { Recipe.create(title: "Garlic Bread") }
    let!(:recipe3) { Recipe.create(title: "Tomato Soup") }

    let!(:ingredient1) { Ingredient.create(name: "tomato") }
    let!(:ingredient2) { Ingredient.create(name: "pasta") }
    let!(:ingredient3) { Ingredient.create(name: "garlic") }
    let!(:ingredient4) { Ingredient.create(name: "bread") }

    before do
      # Associate ingredients with recipes
      recipe1.ingredients << [ ingredient1, ingredient2 ]
      recipe2.ingredients << [ ingredient3, ingredient4 ]
      recipe3.ingredients << [ ingredient1 ]
    end

    context "when ingredients match existing recipes" do
      it "returns recipes that contain the specified ingredients" do
        results = Recipe.search_by_ingredients("tomato")
        expect(results).to include(recipe1, recipe3)
        expect(results).not_to include(recipe2)
      end

      it "orders recipes by the number of matched ingredients in descending order" do
        results = Recipe.search_by_ingredients("tomato, pasta")
        expect(results.first).to eq(recipe1)
        expect(results).to include(recipe3)
      end
    end

    context "when no recipes match the ingredients" do
      it "returns an empty result" do
        results = Recipe.search_by_ingredients("chicken")
        expect(results).to be_empty
      end
    end

    context "when an empty string is passed as ingredients" do
      it "returns all recipes" do
        results = Recipe.search_by_ingredients("")
        expect(results).to match_array([ recipe1, recipe2, recipe3 ])
      end
    end
  end
end
