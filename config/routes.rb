Rails.application.routes.draw do
  
  root "public#index"
  get 'public/index'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end