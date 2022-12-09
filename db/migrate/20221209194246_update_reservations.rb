class UpdateReservations < ActiveRecord::Migration[7.0]
  def change
    rename_column :reservations, :users_id, :reserver_id
    rename_column :reservations, :listings_id, :listing_id
  end
end
