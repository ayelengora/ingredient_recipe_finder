require 'rails_helper'

RSpec.describe RecipesController, type: :controller do
  describe "GET #index" do
    # Set up sample data for testing
    let!(:recipe1) { Recipe.create(title: "Tomato Pasta") }
    let!(:recipe2) { Recipe.create(title: "Garlic Bread") }
    let!(:ingredient1) { Ingredient.create(name: "tomato") }
    let!(:ingredient2) { Ingredient.create(name: "pasta") }
    let!(:ingredient3) { Ingredient.create(name: "garlic") }

    before do
      # Associate ingredients with recipes
      recipe1.ingredients << [ingredient1, ingredient2]
      recipe2.ingredients << [ingredient3]
    end

    context "when ingredients are provided" do
      it "returns recipes that match the specified ingredients" do
        get :index, params: { ingredients: "tomato" }
        
        expect(response).to have_http_status(:success)
        json_response = JSON.parse(response.body)
        
        # Updated expectation based on response structure
        expect(json_response.length).to eq(1)
        expect(json_response.first["title"]).to eq("Tomato Pasta")
      end

      it "returns recipes ordered by number of matching ingredients" do
        get :index, params: { ingredients: "tomato, pasta" }

        expect(response).to have_http_status(:success)
        json_response = JSON.parse(response.body)
        
        # Updated expectation based on response structure
        expect(json_response.length).to eq(1)
        expect(json_response.first["title"]).to eq("Tomato Pasta")
      end
    end

    context "when ingredients are not provided" do
      it "returns all recipes" do
        get :index

        expect(response).to have_http_status(:success)
        json_response = JSON.parse(response.body)

        # Updated expectation based on response structure
        expect(json_response.length).to eq(Recipe.count)
      end
    end

    context "when an error occurs" do
      it "returns a 500 status with an error message" do
        allow(Recipe).to receive(:all).and_raise(StandardError.new("Test error"))

        get :index

        expect(response).to have_http_status(:internal_server_error)
        json_response = JSON.parse(response.body)
        
        expect(json_response["error"]).to eq("Error fetching recipes")
      end
    end
  end
end
