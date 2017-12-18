Rails.application.routes.draw do
    root to: "static_pages#root"    
    
    resources :tables, only: [:new, :show, :create]
end
