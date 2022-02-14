class Problem < ActiveRecord::Migration[6.1]
  def change
    create_table :problems do |i|
      i.integer :difficulty
      i.string :grip_color
      i.string :technique
      i.integer :location
      i.date :end_date
      i.string :problem_description
      i.references :route_setter
      i.timestamps
    end
  end
end
