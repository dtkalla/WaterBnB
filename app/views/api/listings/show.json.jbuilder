json.listing do
    json.extract! @listing, :id, :city, :country, :price, :latitude, :longitude, :description, :pictures_url, :bedrooms, :beds, :bathrooms, :building_type, :type_of_water, :kitchen, :wifi, :parking, :pets_allowed, :boat, :self_check_in, :lister_name, :pic1, :pic2, :pic3, :pic4, :rating, :number_of_ratings
end