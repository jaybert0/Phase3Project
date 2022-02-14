class Problem < ActiveRecord::Base
    belongs_to :maker
    has_many :climbproblems
end 