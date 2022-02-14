class Maker < ActiveRecord::Base
    has_many :problems
    has_many :betas, through: :problems
end
