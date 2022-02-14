class Climber < ActiveRecord::Migration[6.1]
  def change
    create_table :climbers do |i|
      i.string :username
    end
  end
end
