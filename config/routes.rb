Rails.application.routes.draw do
  root "public#index"
  get 'public/index'

  # show live, VR load xml & show 
  get 'live/show', as: "live_demo"
  scope format: "xml" do
    get "pano_config/eye_objects/", :to=>"panos#show", as: "pano"
  end   
  
  # posts/ 
  resources :posts 
  
  # 後台
  #Backend routes  
  namespace :backend do 
    resources :posts
  end 
  resources :backend 

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
