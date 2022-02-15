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
    # I am a little unsure how we would differentiate between the two of these if it were just tied to the ID and patch requests
    # def give_climber_feedback(feedback)
    #     binding.pry
        # self.climber_feedback = feedback
    # end

    # patch '/climbproblem/:id/:route_rating' do
    # climb_problem = Climbproblem.find(params[:id])
    # climb_problem.update(
    #   route_rating: params[:route_rating]
    # )
    # climb_problem.to_json
    # end
    # def set_route_rating
    #     binding.pry

    # end

    # patch '/climbproblem/:id/:favorite' do
    # def is_favorite
    #     binding.pry
    #     self.favorite = !self.favorite
    # end

    # patch '/climbproblem/:id/:in_progress' do
    # def is_in_progress
    #     binding.pry
    #     self.in_progress = !self.in_progress
    # end

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

    # patch '/climbproblem/:id/:is_completed' do  
    # def is_completed
    #     binding.pry
    #     self.is_completed = !self.is_completed
    end