class Api::ReservationsController < ApplicationController
    wrap_parameters include: Listing.attribute_names + ['numGuests'] + ['startDate'] + ['endDate']
    before_action :require_logged_in
  
    def create
        reserver_id = current_user.id
        listing_id = params[:id]
        @reservation = Reservation.new(reservation_params, reserver_id: reserver_id, listing_id: listing_id)
        if @reservation.save
            render :show
        else
            render json: { errors: @listing.errors.full_messages}, status: 422
        end
    end

    def index
        @reservations = []
        reservations = Reservation.all
        reservations.each do |reservation|
            @reservations << reservation if reservation.reserver_id == current_user.id
        end
        render :index
    end

    def show
        @reservation = Reservation.find(params[:id])
        render :show
    end

    def update

    end

    def destroy
        
    end
  
  
    private
  
    def reservation_params
        params.require(:listing).permit(:start_date, :end_date, :num_guests, :price)
    end
end
  