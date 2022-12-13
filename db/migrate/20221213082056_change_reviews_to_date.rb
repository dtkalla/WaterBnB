class ChangeReviewsToDate < ActiveRecord::Migration[7.0]
  def change
    remove_column :reviews, :month
    remove_column :reviews, :year

    add_column :reviews, :review_date, :date
  end
end
