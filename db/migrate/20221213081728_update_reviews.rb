class UpdateReviews < ActiveRecord::Migration[7.0]
  def change
    rename_column :reviews, :users_id, :reviewer_id
  end
end
