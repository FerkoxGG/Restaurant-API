Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get "/restaurants/new", to: 'pages#home'
  get "/restaurants/:id", to: 'pages#home'
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :restaurants, only: [ :index, :show, :update, :create, :destroy ]
    end
  end
  resources :restaurants, only: [ :show ]

  mount ActionCable.server => "/cable"
end
