class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false, unique: true
      t.string :phone_number, null: false, unique: true
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps
    end
  end
end
