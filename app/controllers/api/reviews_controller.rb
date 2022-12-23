class Api::ReviewsController < ApplicationController
    wrap_parameters include: Review.attribute_names + ['reviewerName'] + ['reviewerId'] + ['listingId'] + ['reviewDate']
  
    def create
      @review = Review.new(review_params)
      if @review.save
        @listing = Listing.find(@review.listing_id)
        rating = params[:rating]
        @listing.rating = (@review.listing.rating * @review.listing.number_of_ratings + rating) / (@review.listing.number_of_ratings + 1)
        @listing.number_of_ratings += 1
        @listing.save
        render json: { messages: ["Rating/review successfully submitted!"]}, status: 200
      else
        render json: { errors: ["You can only rate/review each listing once"]}, status: 422
      end
    end

    def index
        @reviews = Review.all
        render :index
    end

    def show
        @review = Review.find(params[:id])
        render :show
    end
  
  
    private
  
    def review_params
      params.require(:review).permit(:review_date, :reviewer_id, :listing_id, :body, :reviewer_name, :rating)
    end
  end
  