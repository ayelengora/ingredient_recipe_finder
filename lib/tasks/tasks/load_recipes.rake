namespace :recipes do
  desc "Load recipes from the JSON file"
  task load: :environment do
    file_path = Rails.root.join("recipes-en.json")
    if File.exist?(file_path)
      file = File.read(file_path)
      recipes_data = JSON.parse(file)
      puts "Loading Recipes.."
      recipes_data.each do |recipe_data|
        # Create the recipe
        recipe = Recipe.create(
          title: recipe_data["title"],
          prep_time: recipe_data["prep_time"] || 0,
          cook_time: recipe_data["cook_time"] || 0,
          ratings: recipe_data["ratings"],
          image: recipe_data["image"] || "default_image.jpg"
        )

        # Create or find ingredients and associate them with the recipe
        recipe_data["ingredients"].each do |ingredient_name|
          ingredient = Ingredient.find_or_create_by(name: ingredient_name)
          RecipeIngredient.create(recipe: recipe, ingredient: ingredient)
        end
      end

      puts "Recipes loaded successfully"
    else
      puts "recipes-en.json file not found"
    end
  end
end
