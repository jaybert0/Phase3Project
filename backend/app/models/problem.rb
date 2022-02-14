class Problem < ActiveRecord::Base
    belongs_to :route_setter
    has_many :betas
end