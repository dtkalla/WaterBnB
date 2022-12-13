class UpdateUsersWithRatings < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :rating, :decimal, :precision=>8, :scale=>6, default: 5
    add_column :users, :number_of_ratings, :integer, default: 0
  end
end
