class User < ActiveRecord::Base
    has_many :climbproblems
    has_many :problems, through: :climbproblems
end 