Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    get 'photos', to: 'photos#index'
    post 'photos', to: 'photos#create'
    post 'images/user_image', to: 'images#add_user_image'
    post 'images/resume_image', to: 'images#add_resume_image'
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
