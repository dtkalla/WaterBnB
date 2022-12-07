json.listings do
    @listings.each do |listing|
        json.set! listing.id do
            json.extract! listing, :id, :city, :country, :price, :latitude, :longitude, :description, :pictures_url
        end
    end
end