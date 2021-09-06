Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :users

   #:index
   get '/users', to: 'users#index', as: 'user'

   #:create
   post '/users', to: 'users#create', as: 'create_user'

   #new
   get 'users/new', to: 'users#new', as: 'new_user'

   #edit
   get 'users/:id/edit', to: 'users#edit', as: 'edit_user'

   #show
   get 'users/:id', to: 'users#show', as: 'show_user'

   #update
   patch 'users/:id', to: 'users#update', as: 'update_user'

   #update
   put 'users/:id', to: 'users#update', as: 'put_update_user'

   #destroy
   delete 'users/:id', to: 'users#destroy', as: 'delete_user'
end
