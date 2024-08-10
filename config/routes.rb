Rails.application.routes.draw do
  get 'root/index'

  get 'requests', to: 'requests#index'
  post 'requests', to: 'requests#create'
  root 'root#index'
end
