class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.string :city, null: false
      t.string :country, null: false
      t.string :latitude, null: false
      t.string :longitude, null: false
      t.text :description, null: false
      t.string :pictures_url, null: false
      t.references :users, foreign_key: true
      t.timestamps
    end
    add_index :listings, :city
    add_index :listings, :country
  end
end
