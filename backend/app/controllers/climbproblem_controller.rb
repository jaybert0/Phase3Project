require 'pry'
class ClimbproblemController < ApplicationController
    

    # I don't fully understand how to call functions using the controller,so I have a bunch of methods in here that I need to trigger or run from post and patch prompts
    # post '/climbproblem/:id/:climber_feedback' do
    # climb_problem = Climbproblem.find(params[:id])
    # climb_problem.create(
    #   climber_feedback: params[:climber_feedback]
    # )
    # climb_problem.to_json
    # end
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

    # patch '/climbproblem/:id/:is_completed' do  
    # def is_completed
    #     binding.pry
    #     self.is_completed = !self.is_completed
    # end
end