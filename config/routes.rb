Rails.application.routes.draw do
  devise_for :users
  root to: 'items#index'

  resources :items do
    collection do
      get 'search'
    end
    resources :likes, only: [:create, :destroy]
    resources :messages, only: [:create]
  end
  
  resources :users, only: [:show]
  resources :users, only: [:show, :create, :update]
  resources :categorys, only: [:index, :show]
  resources :brands, only: [:index]
  resources :identity_informations, only: [:new, :create]
  resources :shipping_addresses, only: [:new, :create]
  resources :orders, only: [:show, :create]
  resources :cards, only: [:new, :show] do
    collection do
      post 'show', to: 'cards#show'
      post 'pay', to: 'cards#pay'
      post 'delete', to: 'cards#delete'
    end
  end
end
