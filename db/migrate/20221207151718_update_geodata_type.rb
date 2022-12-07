class UpdateGeodataType < ActiveRecord::Migration[7.0]
  def change
    remove_column :listings, :latitude
    add_column :listings, :latitude, :decimal, :precision=>10, :scale=>6

    remove_column :listings, :longitude
    add_column :listings, :longitude, :decimal, :precision=>10, :scale=>6
  end
end
