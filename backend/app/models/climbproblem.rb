require 'pry'
class Climbproblem < ActiveRecord::Base
    belongs_to :problem
    belongs_to :user

end 