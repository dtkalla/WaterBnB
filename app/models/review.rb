class Review < ApplicationRecord
    validates :reviewer_id, :listing_id, :review_date, :reviewer_name, presence: true

    before_validation :ensure_listing

    belongs_to :listing,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: :Listing

    belongs_to :reviewer,
        primary_key: :id,
        foreign_key: :reviewer_id,
        class_name: :User


    def self.see_reviews
        reviews = Review.all
        arr = []
        reviews.each { |review| arr << [review.reviewer_name, review.body] }
        arr
    end

    private
    def ensure_listing
        @listing ||= Listing.find(listing_id)
    end
end
