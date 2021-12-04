Rails.application.routes.draw do
  devise_for :users
  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end
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
