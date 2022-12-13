class Api::ReviewsController < ApplicationController
    wrap_parameters include: Review.attribute_names + ['reviewerName'] + ['reviewerId'] + ['listingId'] + ['reviewDate']
  
    def create
      @review = Review.new(review_params)
      # return 7
      if @review.save
        @listing = Listing.find(@review.listing_id)
        rating = params[:rating] || 4
        @listing.rating = (@review.listing.rating * @review.listing.number_of_ratings + rating) / (@review.listing.number_of_ratings + 1)
        @listing.number_of_ratings += 1
        @listing.save
        render :show
      else
        render json: { errors: @review.errors.full_messages}, status: 422
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
  