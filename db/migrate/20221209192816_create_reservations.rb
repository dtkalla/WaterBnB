class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.references :users, foreign_key: true
      t.references :listings, foreign_key: true
      t.integer :price, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.integer :num_guests, null: false
      t.timestamps
    end
  end
end
