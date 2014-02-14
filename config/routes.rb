Emberprod::Application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :posts
      resources :albums
      resources :tracks
    end
  end

  root "ember#start"
end
