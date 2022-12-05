class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password'] + ['firstName'] + ['lastName']

  def create
    @user = User.new(user_params)
    # p params[:first_name]
    if @user.save
      login!(@user)
      render :show
    else
      render json: { errors: @user.errors.full_messages, status: 422}
    end
  end


  private

  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :password)
  end
end
