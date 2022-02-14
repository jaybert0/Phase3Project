class Climbproblem < ActiveRecord::Migration[6.1]
  def change
    create_table :climbproblems do |i|
        i.boolean :favorite
        i.boolean :in_progress
        i.boolean :completed
        i.string :climber_feedback
        i.references :user
        i.references :problem
        i.float :route_rating
      
    end
  end
end
