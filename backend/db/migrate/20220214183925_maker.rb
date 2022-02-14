class Maker < ActiveRecord::Migration[6.1]
  def change
    create_table :makers do |i|
      i.string :username
    end
  end
end
