class Beta < ActiveRecord::Migration[6.1]
  def change
    create_table :betas do |i|
      i.integer :difficulty
      i.string :technique
      i.integer :location
      i.date :end_date
      i.timestamps
      i.boolean :favorite
      i.boolean :in_progress
      i.boolean :completed
      i.string :climber_feedback
      i.string :setter_description
      i.references :climber
      i.references :route_setter
      i.float :route_rating
    end
  end
end
