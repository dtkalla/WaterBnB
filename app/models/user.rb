class User < ApplicationRecord
    validates :phone_number, :email, presence: true, uniqueness: true
    validates :first_name, :last_name, :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 8 }, allow_nil: true

    attr_reader :password

    def self.find_by_credentials(email,password)
        user = User.find_by(email: email)
        (user && user.is_password?(password)) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest
    end

    private
    def generate_session_token
        SecureRandom::urlsafe_base64
    end
end
