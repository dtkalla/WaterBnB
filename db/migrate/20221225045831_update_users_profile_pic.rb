class UpdateUsersProfilePic < ActiveRecord::Migration[7.0]
  def change
    add_column :listings, :profile_pic, :string, default: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
  end
end
