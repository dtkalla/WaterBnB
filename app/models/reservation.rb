class Reservation < ApplicationRecord
    require 'date'

    validates :reserver_id, :listing_id, :start_date, :end_date, :price, :num_guests, presence: true
    validate :end_date_after_start_date
    validates_numericality_of :price, :num_guests, :greater_than => 0

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

    def end_date_after_start_date
        return if end_date.blank? || start_date.blank?
    
        if end_date <= start_date
          errors.add(:end_date, "must be after the start date")
        end
     end

    def ensure_listing
        @listing ||= Listing.find(listing_id)
    end

    
end