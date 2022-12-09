class AddColumnsToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :listings, :bedrooms, :integer, default: 2
    add_column :listings, :beds, :integer, default: 2
    add_column :listings, :bathrooms, :integer, default: 1
    add_column :listings, :building_type, :string, default: "house"
    add_column :listings, :type_of_water, :string, default: "ocean"
    add_column :listings, :kitchen, :boolean, default: true
    add_column :listings, :wifi, :boolean, default: true
    add_column :listings, :parking, :boolean, default: true
    add_column :listings, :pets_allowed, :boolean, default: false
    add_column :listings, :boat, :boolean, default: true
    add_column :listings, :self_check_in, :boolean, default: true
  end
end
