class UpdateUsers < ActiveRecord::Migration[7.0]
  def change
    rename_column :users, :username, :first_name
    add_column :users, :last_name, :string, null: false
  end
end
