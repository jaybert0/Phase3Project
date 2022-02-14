class Climbproblem < ActiveRecord::Base
    belongs_to :problem
    belongs_to :climber
end