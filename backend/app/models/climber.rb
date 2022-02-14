class Climber < ActiveRecord::Base
   has_many :betas
   has_many :problems through: :betas
   
end