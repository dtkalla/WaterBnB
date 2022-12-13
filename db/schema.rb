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

ActiveRecord::Schema[7.0].define(version: 2022_12_13_193422) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

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
    t.string "pic1", default: "https://waterbnb-seeds.s3.amazonaws.com/2_0.png"
    t.string "pic2", default: "https://waterbnb-seeds.s3.amazonaws.com/3_0.png"
    t.string "pic3", default: "https://waterbnb-seeds.s3.amazonaws.com/4_0.png"
    t.string "pic4", default: "https://waterbnb-seeds.s3.amazonaws.com/5_0.png"
    t.decimal "rating", precision: 8, scale: 6, default: "5.0"
    t.integer "number_of_ratings", default: 0
    t.index ["city"], name: "index_listings_on_city"
    t.index ["country"], name: "index_listings_on_country"
    t.index ["lister_id"], name: "index_listings_on_lister_id"
  end

  create_table "reservations", force: :cascade do |t|
    t.bigint "reserver_id"
    t.bigint "listing_id"
    t.integer "price", null: false
    t.date "start_date", null: false
    t.date "end_date", null: false
    t.integer "num_guests", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["listing_id"], name: "index_reservations_on_listing_id"
    t.index ["reserver_id"], name: "index_reservations_on_reserver_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.bigint "reviewer_id"
    t.bigint "listing_id"
    t.text "body"
    t.string "reviewer_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date "review_date"
    t.index ["listing_id"], name: "index_reviews_on_listing_id"
    t.index ["reviewer_id"], name: "index_reviews_on_reviewer_id"
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

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "listings", "users", column: "lister_id"
  add_foreign_key "reservations", "listings"
  add_foreign_key "reservations", "users", column: "reserver_id"
  add_foreign_key "reviews", "listings"
  add_foreign_key "reviews", "users", column: "reviewer_id"
end
