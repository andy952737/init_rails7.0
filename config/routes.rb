Rails.application.routes.draw do
  root "public#index"
  get 'public/index'
  
  # posts/ 
  resources :posts 
  
  # 後台
  get 'backend/index'
  
  #Backend routes  
  namespace :backend do 
    resources :posts
    # namespace :backend do
    #   get 'posts/index'
    # end
  end 
  resources :backend 

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
