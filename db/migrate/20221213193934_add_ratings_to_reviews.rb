class AddRatingsToReviews < ActiveRecord::Migration[7.0]
  def change
    add_column :reviews, :rating, :integer, default: 5
  end
end
