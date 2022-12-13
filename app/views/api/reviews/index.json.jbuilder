json.reviews do
    @reviews.each do |review|
        json.set! review.id do
            json.extract! review, :id, :review_date, :body, :reviewer_id, :listing_id, :listing, :reviewer_name
        end
    end
end