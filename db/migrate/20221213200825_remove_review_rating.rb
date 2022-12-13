class RemoveReviewRating < ActiveRecord::Migration[7.0]
  def change
    remove_column :reviews, :rating
  end
end
