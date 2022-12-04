class ApplicationController < ActionController::API
    # include ActionController::Cookies
    include ActionController::Helpers
    include ActionController::RequestForgeryProtection

    protect_from_forgery with: :exception
    before_action :snake_case_params, :attach_authenticity_token

    helper_method :current_user, :logged_in?
    
    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def login!(user)
        @current_user = user
        session[:session_token] = user.reset_session_token!
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
    end

    def require_logged_in
        if !logged_in?
            render json: { errors: ['Must be logged in'] }, status: :unauthorized
        end
    end

    def require_logged_out
        if logged_in?
            render json: { errors: ['Must be logged out'] }, status: 403
        end
    end

    def test
        if params.has_key?(:login)
            login!(User.first)
        elsif params.has_key?(:logout)
            logout!
        end
      
        if current_user
          render json: { user: current_user.slice('id', 'first_name', 'session_token') }
        else
          render json: ['No current user']
        end
    end

    # private
    def snake_case_params
        params.deep_transform_keys!(&:underscore)
    end

    def attach_authenticity_token
        headers['X-CSRF-Token'] = masked_authenticity_token(session)
        # headers['X-CSRF-Token'] = form_authenticity_token
    end
end
