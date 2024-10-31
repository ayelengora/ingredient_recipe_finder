Ingredient Recipe Finder

A web app to find recipes based on ingredients you have. Built with Ruby on Rails (backend) and React (frontend), deployed on Fly.io.
https://ingredient-recipe-finder.fly.dev/

Tech Stack

Frontend: React

Backend: Ruby on Rails, PostgreSQL

Deployment: Fly.io

Features

Search recipes by ingredients

View details: prep time, cook time, ratings



Prerequisites

Ensure the following are installed:
Ruby 3.1.2
Node.js and npm
PostgreSQL or MySQL


Installation
Clone the Repository

bash
git clone https://github.com/your-username/ingredient-recipe-finder.git
cd ingredient-recipe-finder
Backend Setup

Install gems and set up the database:

bash
bundle install
rails db:create db:migrate
Frontend Setup

Navigate to recipe_finder_frontend, install dependencies, and build the React app:

bash
cd recipe_finder_frontend
npm install
npm run build

bash
cp -r recipe_finder_frontend/build/* ../public/
Environment Variables

Create a .env file in recipe_finder_frontend with the following:

bash
REACT_APP_API_URL=https://ingredient-recipe-finder.fly.dev
Running Locally
Start Rails Server

bash
rails server
Access the App

Visit http://localhost:3000 in your browser.

Load Recipes
To load recipes from recipes-en.json, run the following Rake task:

bash
bin/rails recipes:load


Run Rake Task on Fly.io
bash
fly ssh console -C "bin/rails recipes:load"

Database Structure

[prepostseo.pdf](https://github.com/user-attachments/files/17587349/prepostseo.pdf)
