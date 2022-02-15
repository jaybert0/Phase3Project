class MakersController < ApplicationController
    get '/makers' do
        user = Maker.all
        user.to_json
    end
end