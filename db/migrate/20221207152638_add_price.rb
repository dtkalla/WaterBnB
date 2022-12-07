class AddPrice < ActiveRecord::Migration[7.0]
  def change
    add_column :listings, :price, :integer
  end
end
