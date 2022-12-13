class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.references :users, foreign_key: true
      t.references :listing, foreign_key: true
      t.text :body
      t.string :month, null: false
      t.integer :year, null: false
      t.string :reviewer_name, null: false
      t.timestamps
    end
  end
end
