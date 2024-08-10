Rails.application.routes.draw do
  get 'root/index'

  get 'requests', to: 'requests#index'
  post 'requests', to: 'requests#create'
  post 'requests/:id/purchase', to: 'requests#purchase'
  root 'root#index'
end
