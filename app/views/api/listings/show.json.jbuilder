json.listing do
    json.extract! @listing, :id, :city, :country, :price, :latitude, :longitude, :description, :pictures_url
end