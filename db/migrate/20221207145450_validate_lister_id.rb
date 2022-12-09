class ValidateListerId < ActiveRecord::Migration[7.0]
  def change
    change_column_null(:listings, :lister_id, false)
  end
end
