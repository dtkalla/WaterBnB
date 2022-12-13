class Api::ReviewsController < ApplicationController
    wrap_parameters include: Review.attribute_names + ['reviewerName'] + ['reviewerId'] + ['listingId'] + ['reviewDate']
  
    def create
      @review = Review.new(review_params)
      # p params[:first_name]
      if @review.save
        render :show
      else
        render json: { errors: @review.errors.full_messages}, status: 422
      end
    end

    def index
        @reviews = Review.all
        # .where(reviewer_id: current_user.id)
        render :index
    end

    def show
        @review = Review.find(params[:id])
        render :show
    end
  
  
    private
  
    def review_params
      params.require(:review).permit(:review_date, :reviewer_id, :listing_id, :body, :reviewer_name)
    end
  end
  