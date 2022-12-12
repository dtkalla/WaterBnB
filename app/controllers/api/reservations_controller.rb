class Api::ReservationsController < ApplicationController
    wrap_parameters include: Reservation.attribute_names + ['numGuests'] + ['startDate'] + ['endDate'] + ['listingId'] + ['reserverId']
    before_action :require_logged_in
  
    def create
        # reserver_id = current_user.id
        # listing_id = params[:id]
        @reservation = Reservation.new(reservation_params)
        if @reservation.save
            render :show
        else
            render json: { errors: @listing.errors.full_messages}, status: 422
        end
    end

    def index
        @reservations = Reservation.all.where(reserver_id: current_user.id)
        render :index
    end

    def show
        @reservation = Reservation.find(params[:id])
        render :show
    end

    def update
        @reservation = Reservation.find(params[:id])
        if current_user.id == @reservation.reserver_id
            @reservation.update(reservation_params)
            render :show
        else
            flash.now[:errors] = ["Something went wrong!"]
            render :edit
        end
    end

    def destroy
        @reservation = Reservation.find(params[:id])
        if @reservation.destroy
            # redirect_to "/reservations/#{params[:id]}"
        else
            render json: { errors: @listing.errors.full_messages}, status: 422
        end
    end
  
  
    private
  
    def reservation_params
        params.require(:reservation).permit(:start_date, :end_date, :num_guests, :price, :listing_id, :reserver_id)
    end
end
  