Rails.application.routes.draw do
  get "static/index"
  resources :recipes, only: [ :index, :show ]

  # Health check route
  get "up" => "rails/health#show", as: :rails_health_check

  # Define the root path to serve the React app
  root to: "static#index"

  # Catch-all route for React Router
  get "*path", to: "static#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
