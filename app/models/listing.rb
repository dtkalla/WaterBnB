class Listing < ApplicationRecord
    validates :city, :country, :latitude, :longitude, :description, :pictures_url, :lister_id, :price, :number_of_ratings, :rating, presence: true    
    validates :latitude , numericality: { greater_than_or_equal_to:  -90, less_than_or_equal_to:  90 }
    validates :longitude, numericality: { greater_than_or_equal_to: -180, less_than_or_equal_to: 180 }
    validates :rating, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }
    validates :price, numericality: { greater_than: 0 }
    validates :number_of_ratings, numericality: { greater_than_or_equal_to: 0 }

    belongs_to :lister,
        class_name: :User,
        primary_key: :id,
        foreign_key: :lister_id


    has_many :reservations,
        class_name: :Reservation,
        primary_key: :id,
        foreign_key: :listing_id,
        dependent: :destroy


    has_many :reviews,
        class_name: :Review,
        primary_key: :id,
        foreign_key: :listing_id,
        dependent: :destroy

    

    def self.map_all_listings
        listings = Listing.all.sort_by { |p| [-2*p.latitude + p.longitude] }
        (0...listings.length).each do |i|
            listing = listings[i]
            p [listing.lister_name, listing.city, listing.latitude, listing.longitude]
        end
        return
    end
end