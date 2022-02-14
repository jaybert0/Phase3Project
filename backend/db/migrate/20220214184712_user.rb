class User < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |i|
      i.string :username
    end
  end
end
