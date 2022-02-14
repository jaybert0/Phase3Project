class RouteSetter < ActiveRecord::Migration[6.1]
  def change
    create_table :route_setters do |i|
      i.string :username
    end
  end
end
