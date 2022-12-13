class Review < ApplicationRecord
    validates :reviewer_id, :listing_id, :review_date, :reviewer_name, presence: true

    validates :rating, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }

    validates_uniqueness_of :reviewer_id, :scope => [:listing_id, :review_date]

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
