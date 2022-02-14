class Maker < ActiveRecord::Base
    has_many :problems
    has_many :climbproblems, through: :problems
end 