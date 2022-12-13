class Review < ApplicationRecord
    validates :reviewer_id, :listing_id, :review_date, :reviewer_name, presence: true

    before_validation :ensure_listing

    private
    def ensure_listing
        @listing ||= Listing.find(listing_id)
    end
end
