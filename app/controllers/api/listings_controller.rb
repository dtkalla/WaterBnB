class Api::ListingsController < ApplicationController
    wrap_parameters include: Listing.attribute_names
    before_action :require_logged_in, only: [:create, :update, :destroy]
  
    def create
        lister_id = current_user.id
        @listing = Listing.new(listing_params, lister_id: lister_id)
        if @listing.save
            render :show
        else
            render json: { errors: @listing.errors.full_messages}, status: 422
        end
    end

    def index
        @listings = Listing.all
        render :index
    end

    def show
        @listing = Listing.find(params[:id])
        render :show
    end

    def update

    end

    def destroy

    end
  
  
    private
  
    def listing_params
        params.require(:listing).permit(:city, :country, :latitude, :longitude, :description, :pictures_url, :price)
    end
end
  