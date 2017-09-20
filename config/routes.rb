Rails.application.routes.draw do
  resources :todos
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  match '*all', to: 'static_pages#index', via: [:get]
end
