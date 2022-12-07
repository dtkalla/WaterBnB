class Api::ListingsController < ApplicationController
    wrap_parameters include: Listing.attribute_names
  
    def create
        lister_id = current_user.id
        @listing = Listing.new(listing_params, lister_id: lister_id)
        # p params[:first_name]
        if @listing.save
            render :show
        else
            render json: { errors: @listing.errors.full_messages}, status: 422
        end
    end
  
  
    private
  
    def listing_params
        params.require(:listing).permit(:city, :country, :latitude, :longitude, :description, :pictures_url, :price)
    end
end
  