class Listing < ApplicationRecord
    validates :city, :country, :latitude, :longitude, :description, :pictures_url, :lister_id, :price, presence: true    
    validates :latitude , numericality: { greater_than_or_equal_to:  -90, less_than_or_equal_to:  90 }
    validates :longitude, numericality: { greater_than_or_equal_to: -180, less_than_or_equal_to: 180 }
    validates :price, numericality: { greater_than: 0 }
    
end