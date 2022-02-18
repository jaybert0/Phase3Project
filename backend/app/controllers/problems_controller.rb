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
        newcp = Problem.last.id
        climb_problem = Climbproblem.create(
            favorite: false,
            in_progress: false,
            completed: false,
            climber_feedback: "",
            user_id: User.last.id,
            problem_id: newcp,
            route_rating: 0
        )
        problem.to_json
    end

    get '/problems' do
        problem = Problem.all
        problem.to_json(
            only: [:id, :difficulty, :grip_color, :technique, :location, :end_date, :problem_description])
    end   
    
    get '/problems/:id' do
        Problem.find(params[:id]).to_json(
            only: [:difficulty, :grip_color, :technique, :location, :end_date, :problem_description])
    end   

    
    get '/problems-climb' do
        Problem.all.to_json(
            only: [:id, :difficulty, :grip_color, :technique, :location, :end_date, :problem_description],
            include: {climbproblems: {only: [:favorite, :in_progress, :completed, :route_rating]}}   
        )
    end
    patch '/problems/:id' do
        problem = Problem.find(params[:id])
        problem.update(
            difficulty: params[:difficulty],
            grip_color: params[:grip_color],
            technique: params[:technique],
            location: params[:location],
            end_date: params[:end_date],
            problem_description: params[:problem_description],
        )
        problem.to_json
        
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
        Problem.all.order(difficulty: :asc).to_json
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