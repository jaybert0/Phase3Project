class UsersController < ApplicationController
    get '/users' do
        user = User.all
        user.to_json
    end
end