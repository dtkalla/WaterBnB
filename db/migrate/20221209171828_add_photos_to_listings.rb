class AddPhotosToListings < ActiveRecord::Migration[7.0]
  def change
    add_column :listings, :pic1, :string, default: "https://waterbnb-seeds.s3.amazonaws.com/2_0.png"
    add_column :listings, :pic2, :string, default: "https://waterbnb-seeds.s3.amazonaws.com/3_0.png"
    add_column :listings, :pic3, :string, default: "https://waterbnb-seeds.s3.amazonaws.com/4_0.png"
    add_column :listings, :pic4, :string, default: "https://waterbnb-seeds.s3.amazonaws.com/5_0.png"
  end
end
