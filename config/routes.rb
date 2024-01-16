Rails.application.routes.draw do
  root 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :homes, only: [:index]
    end
  end
  
  get "up" => "rails/health#show", as: :rails_health_check

end
