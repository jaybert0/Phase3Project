class ProblemController < ApplicationController
    post '/problems' do
        problem = Problem.create(
            difficulty: params[:difficulty],
            grip_color: params[:grip_color],
            technique: params[:technique],
            location: params[:location],
            end_date: params[:end_date],
            problem_description: params[:problem_description],
            maker_id: Maker.id
        )
        problem.to_json
    end

    get '/problems' do
        problem = Problem.all.order(:difficulty)
        problem.to_json
    end   
    
    get '/problems/:id' do
        Problem.find(params[:id]).to_json
    end   

    delete '/problems/:id' do
        problem = Problem.find(params[:id])
        problem.destroy
        problem.to_json
    end      
end