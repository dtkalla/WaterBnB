class ChangeRatingsToListings < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :rating
    remove_column :users, :number_of_ratings

    add_column :listings, :rating, :decimal, :precision=>8, :scale=>6, default: 5
    add_column :listings, :number_of_ratings, :integer, default: 0
  end
end
