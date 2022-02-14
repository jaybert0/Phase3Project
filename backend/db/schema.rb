# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_02_14_184712) do

  create_table "climbproblems", force: :cascade do |t|
    t.boolean "favorite"
    t.boolean "in_progress"
    t.boolean "completed"
    t.string "climber_feedback"
    t.integer "user_id"
    t.integer "problem_id"
    t.float "route_rating"
    t.index ["problem_id"], name: "index_climbproblems_on_problem_id"
    t.index ["user_id"], name: "index_climbproblems_on_user_id"
  end

  create_table "makers", force: :cascade do |t|
    t.string "username"
  end

  create_table "problems", force: :cascade do |t|
    t.integer "difficulty"
    t.string "grip_color"
    t.string "technique"
    t.integer "location"
    t.date "end_date"
    t.string "problem_description"
    t.integer "maker_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["maker_id"], name: "index_problems_on_maker_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
  end

end
