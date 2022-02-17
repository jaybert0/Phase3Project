require 'pry'
class ClimbproblemsController < ApplicationController
    get '/climbproblems' do
        problems = Climbproblem.all
        problems.to_json(
            only: [:id, :favorite, :in_progress, :completed, :climber_feedback, :problem_id, :route_rating]
        )
    end

    get '/climbproblems/:id' do
        problems = Climbproblem.find(params[:id])
        problems.to_json(
            only: [:id, :favorite, :in_progress, :completed, :climber_feedback, :problem_id, :route_rating]
        )
    end

    post '/climbproblems' do
        
        climb_problem = Climbproblem.create(
            favorite: params[:favorite],
            in_progress: params[:in_progress],
            completed: params[:completed],
            climber_feedback: params[:climber_feedback],
            user_id: User.last.id,
            problem_id: params[:problem_id],
            route_rating: params[:route_rating]
        )
        climb_problem.to_json
    end

    get '/climbproblems-favs' do
        problems = Climbproblem.where('favorite = true').order(:problem_id)
        problems.to_json(only: [:favorite, :in_progress, :completed, :climber_feedback, :problem_id, :route_rating])
    end

    get '/climbproblems/in_progress' do
        problems = Climbproblem.where('in_progress = true').order(:problem_id)
        problems.to_json(only: [:favorite, :in_progress, :climber_feedback, :problem_id, :route_rating])
    end
    get '/climbproblems/completed' do
        problems = Climbproblem.where('completed = true').order(:problem_id)
        problems.to_json(only: [:favorite, :completed, :climber_feedback, :problem_id, :route_rating])
    end

    patch '/climbproblems/:id' do
        problem = Climbproblem.find(params[:id])
        problem.update(
          in_progress: params[:in_progress],
          favorite: params[:favorite],
          completed: params[:completed],
          climber_feedback: params[:climber_feedback],
          route_rating: params[:route_rating]
        )
        problem.to_json
        
    end

  
    end