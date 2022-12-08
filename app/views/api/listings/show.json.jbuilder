json.listing do
    json.extract! @listing, :id, :city, :country, :price, :latitude, :longitude, :description, :pictures_url, :bedrooms, :beds, :bathrooms, :building_type, :type_of_water, :kitchen, :wifi, :parking, :pets_allowed, :boat, :self_check_in, :lister_name
end