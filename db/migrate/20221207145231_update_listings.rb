class UpdateListings < ActiveRecord::Migration[7.0]
  def change
    rename_column :listings, :users_id, :lister_id
  end
end
