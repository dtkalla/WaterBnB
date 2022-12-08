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

ActiveRecord::Schema[7.0].define(version: 2022_12_08_185926) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listings", force: :cascade do |t|
    t.string "city", null: false
    t.string "country", null: false
    t.text "description", null: false
    t.string "pictures_url", null: false
    t.bigint "lister_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.decimal "latitude", precision: 10, scale: 6
    t.decimal "longitude", precision: 10, scale: 6
    t.integer "price"
    t.integer "bedrooms", default: 2
    t.integer "beds", default: 2
    t.integer "bathrooms", default: 1
    t.string "building_type", default: "house"
    t.string "type_of_water", default: "ocean"
    t.boolean "kitchen", default: true
    t.boolean "wifi", default: true
    t.boolean "parking", default: true
    t.boolean "pets_allowed", default: false
    t.boolean "boat", default: true
    t.boolean "self_check_in", default: true
    t.string "lister_name", default: "Barbara"
    t.index ["city"], name: "index_listings_on_city"
    t.index ["country"], name: "index_listings_on_country"
    t.index ["lister_id"], name: "index_listings_on_lister_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "last_name", null: false
  end

  add_foreign_key "listings", "users", column: "lister_id"
end
