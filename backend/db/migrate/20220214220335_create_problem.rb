class CreateProblem < ActiveRecord::Migration[6.1]
  def change
    create_table :problems do |i|
      i.integer :difficulty
      i.string :grip_color
      i.string :technique
      i.integer :location
      i.date :end_date
      i.string :problem_description
      i.references :maker
      i.timestamps
    end
  end
end
