class UpdateListingsRemovePics < ActiveRecord::Migration[7.0]
  def change
    remove_columns :listings, :pictures_url, :pic1, :pic2, :pic3, :pic4
  end
end
