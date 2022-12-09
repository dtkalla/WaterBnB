class Api::ListingsController < ApplicationController
    wrap_parameters include: Listing.attribute_names + ['buildingType']
    before_action :require_logged_in, only: [:create, :update, :destroy]
  
    # def create
    #     lister_id, lister_name = current_user.id, current_user.first_name
    #     @listing = Listing.new(listing_params, lister_id: lister_id, lister_name: lister_name)
    #     if @listing.save
    #         render :show
    #     else
    #         render json: { errors: @listing.errors.full_messages}, status: 422
    #     end
    # end

    def index
        @listings = Listing.all
        render :index
    end

    def show
        @listing = Listing.find(params[:id])
        render :show
    end

    # def update

    # end

    # def destroy

    # end
  
  
    # private
  
    # def listing_params
    #     params.require(:listing).permit(:city, :country, :latitude, :longitude, :description, :pictures_url, :price, :bedrooms, :beds, :bathrooms, :building_type, :type_of_water, :kitchen, :wifi, :parking, :pets_allowed, :boat, :self_check_in, :lister_name)
    # end
end
  