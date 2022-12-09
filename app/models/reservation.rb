class User < ApplicationRecord
    validates :reserver_id, :listing_id, :start_date, :end_date, :price, :num_guests, presence: true
    validates_numericality_of :end_date, :greater_than => :start_date
    validates_numericality_of :price, :num_guests, :greater_than => 0
    validates_numericality_of :num_guests, :less_than_or_equal_to => @listing.beds

    before_validation :ensure_listing

    belongs_to :listing,
        class_name: :Listing,
        primary_key: :id,
        foreign_key: :listing_id

    belongs_to :reserver,
        class_name: :User,
        primary_key: :id,
        foreign_key: :reserver_id

    private

    def ensure_listing
        @listing ||= Listing.find(@listing_id)
    end

end