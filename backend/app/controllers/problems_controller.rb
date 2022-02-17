class ProblemsController < ApplicationController
    post '/problems' do
        
        problem = Problem.create(
            difficulty: params[:difficulty],
            grip_color: params[:grip_color],
            technique: params[:technique],
            location: params[:location],
            end_date: params[:end_date],
            problem_description: params[:problem_description],
            maker_id: Maker.first.id
        )
        problem.to_json
    end

    get '/problems' do
        problem = Problem.all
        problem.to_json(
            only: [:difficulty, :grip_color, :technique, :location, :end_date, :problem_description])
    end   
    
    get '/problems/:id' do
        Problem.find(params[:id]).to_json(
            only: [:difficulty, :grip_color, :technique, :location, :end_date, :problem_description])
    end   

    delete '/problems/:id' do
        problem = Problem.find(params[:id])
        problem.destroy
        problem.to_json
    end      
    get '/problems-technique/:technique' do
        problem = Problem.where("technique = ?", params[:technique])
        problem.to_json
    end
    
    # get '/problems/:end_date' do
    #     problem = Problem.where("end_date = ?", params[:end_date])
    #     problem.to_json
    # end
    get '/problems-difficulty/easy' do
        Problem.all.order(problems: :asc).to_json
    end
    get '/problems-difficulty/hard' do
        Problem.all.order(difficulty: :desc).to_json
    end
    get '/problems-difficulty-v/:v' do
        problem = Problem.where("difficulty <= ?", params[:v])
        problem.to_json(
            only: [:difficulty, :grip_color, :technique, :location, :end_date, :problem_description])  
    end

end