Rails.application.routes.draw do

  
  devise_for :users
  root "items#index"
  resources :items, only: [:index, :new,:show]
  
  root "orders#show"
  resources :orders
end
