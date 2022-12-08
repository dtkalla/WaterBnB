# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#



ApplicationRecord.transaction do 
    puts "Destroying users table..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
        first_name: 'Muhammed',
        last_name: 'Li',
        email: 'common@name.net', 
        password: 'password',
    )

    User.create!(
        first_name: 'Anthony',
        last_name: 'Bourdain',
        email: 'anthony@travel.org', 
        password: 'password2',
    )
    
    User.create!(
        first_name: 'Barbara',
        last_name: 'Corcoran',
        email: 'barb@money.com', 
        password: 'crush_the_proletariat',
    )

    User.create!(
        first_name: 'Elisa',
        last_name: 'Arias',
        email: 'earias@yahoo.com', 
        password: 'contrasena',
    )


    # 10.times do 
    #   User.create!({
    #     first_name: Faker::Name.firstName,
    #     last_name: Faker::Name.lastName,
    #     email: Faker::Internet.unique.email,
    #     password: 'password'
    #   }) 
    # end






    puts "Destroying listings table..."
    # Unnecessary if using `rails db:seed:replant`
    Listing.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('listings')
  
    puts "Creating listings..."
    # Create one user with an easy to remember username, email, and password:
    Listing.create!(
        city: 'San Francisco',
        country: 'California',
        description: 'Stay here while you interview for a tech job in Silicon Valley!', 
        pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
        lister_id: 3,
        latitude: 37.7749,
        longitude: -122.4194,
        price: 112,
    )


    Listing.create!(
        city: 'Manhattan',
        country: 'New York',
        description: 'Greatest city on earth!', 
        pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
        lister_id: 2,
        latitude: 40.7831,
        longitude: -73.9712,
        price: 257,
    )
    

    Listing.create!(
        city: 'Barcelona',
        country: 'Spain',
        description: '¡Bienvenidos a todos!', 
        pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
        lister_id: 4,
        latitude: 41.3874,
        longitude: 2.1686,
        price: 84,
    )


    Listing.create!(
        city: 'Cape Town',
        country: 'South Africa',
        description: 'Stay at the edge of the world!', 
        pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
        lister_id: 3,
        latitude: -33.9249,
        longitude: 18.4241,
        price: 35,
    )


    Listing.create!(
        city: 'Buenos Aires',
        country: 'Argentina',
        description: 'Algun lema escrito mas tarde', 
        pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
        lister_id: 3,
        latitude: -34.6037,
        longitude: -58.3816,
        price: 149,
    )


    Listing.create!(
        city: 'Bouvet Island',
        country: 'Norway',
        description: "It's actually illegal to visit, and good luck getting here!", 
        pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
        lister_id: 1,
        latitude: -54.4208,
        longitude: 3.3464,
        price: 90,
    )


    # Listing.create!(
    #     city: 'Dubai',
    #     country: 'United Arab Emirates',
    #     description: "The world is your oyster here (if you have the money)!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 3,
    #     latitude: 25.2048,
    #     longitude: 55.2708,
    #     price: 316,
    # )


    # Listing.create!(
    #     city: 'Port Moresby',
    #     country: 'Papua New Guinea',
    #     description: "Come learn about the most diverse country you've never heard of!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 3,
    #     latitude: -9.4438,
    #     longitude: 147.1803,
    #     price: 21,
    # )


    # Listing.create!(
    #     city: 'Chicago',
    #     country: 'Illinois',
    #     description: "Midwest MidBEST!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 1,
    #     latitude: 41.8781,
    #     longitude: -87.6298,
    #     price: 92,
    # )


    # Listing.create!(
    #     city: 'Duluth',
    #     country: 'Minnesota',
    #     description: "Other cities have lakes, but ours is Superior!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 3,
    #     latitude: 46.7867,
    #     longitude: -92.1005,
    #     price: 92,
    # )


    # Listing.create!(
    #     city: 'Flushing',
    #     country: 'New York',
    #     description: "Make sure to try the hot pot!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 1,
    #     latitude: 40.7675,
    #     longitude: -73.8331,
    #     price: 144,
    # )


    # Listing.create!(
    #     city: 'Crown Heights',
    #     country: 'New York',
    #     description: "Stay in the affordable part of Brooklyn", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 3,
    #     latitude: 40.6694,
    #     longitude: -73.9422,
    #     price: 99,
    # )


    # Listing.create!(
    #     city: 'Manhattan',
    #     country: 'New York',
    #     description: "So much history to see in Harlem!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 3,
    #     latitude: 40.8116,
    #     longitude: -73.9465,
    #     price: 475,
    # )


    # Listing.create!(
    #     city: 'San Francisco',
    #     country: 'California',
    #     description: "Have a gay old time!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 3,
    #     latitude: 37.7609,
    #     longitude: -122.4350,
    #     price: 137,
    # )


    # Listing.create!(
    #     city: 'Seattle',
    #     country: 'Washington',
    #     description: "Make sure to rent a bike and explore the city!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 1,
    #     latitude: 47.6062,
    #     longitude: -122.3321,
    #     price: 206,
    # )


    # Listing.create!(
    #     city: 'Ubud',
    #     country: 'Indonesia',
    #     description: "Eat, pray, love <3", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 1,
    #     latitude: -8.4095,
    #     longitude: 115.1889,
    #     price: 94,
    # )


    # Listing.create!(
    #     city: 'Rio de Janeiro',
    #     country: 'Brazil',
    #     description: "Come see the biggest Carnaval on earth!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 3,
    #     latitude: -22.9068,
    #     longitude: -43.1729,
    #     price: 162,
    # )


    # Listing.create!(
    #     city: 'Flores',
    #     country: 'Guatemala',
    #     description: "Close to the famous Tikal ruins!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 4,
    #     latitude: 16.9181,
    #     longitude: -89.8926,
    #     price: 31,
    # )


    # Listing.create!(
    #     city: 'Tokyo',
    #     country: 'Japan',
    #     description: "Stay at the biggest city on earth and climb Mount Fuji!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 3,
    #     latitude: 35.6762,
    #     longitude: 139.6503,
    #     price: 132,
    # )


    # Listing.create!(
    #     city: 'Venice',
    #     country: 'Italy',
    #     description: "No need for a car -- take a gondola!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 1,
    #     latitude: 45.4408,
    #     longitude: 12.3155,
    #     price: 86,
    # )


    # Listing.create!(
    #     city: 'Lagos',
    #     country: 'Nigeria',
    #     description: "The heart of Africa", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 1,
    #     latitude: 6.5244,
    #     longitude: 3.3792,
    #     price: 14,
    # )


    # Listing.create!(
    #     city: 'Dakar',
    #     country: 'Senegal',
    #     description: "Venez ici, tout le monde !", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 3,
    #     latitude: 14.7167,
    #     longitude: -17.4677,
    #     price: 19,
    # )


    # Listing.create!(
    #     city: 'Phuket',
    #     country: 'Thailand',
    #     description: "Please pronounce this city's name correctly...", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 1,
    #     latitude: 7.8804,
    #     longitude: 98.3923,
    #     price: 28,
    # )


    # Listing.create!(
    #     city: 'San Sebastian',
    #     country: 'Spain',
    #     description: "Also known as Donostia", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 4,
    #     latitude: 43.3183,
    #     longitude: -1.9812,
    #     price: 78,
    # )


    # Listing.create!(
    #     city: 'Marseille',
    #     country: 'France',
    #     description: "J'ai pas pense quoi dire ici.", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 1,
    #     latitude: 43.2965,
    #     longitude: 5.3698,
    #     price: 103,
    # )


    # Listing.create!(
    #     city: 'Honolulu',
    #     country: 'Hawaii',
    #     description: "Great beaches and vacations.", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 1,
    #     latitude: 21.3099,
    #     longitude: -157.8581,
    #     price: 341,
    # )


    # Listing.create!(
    #     city: 'San Juan',
    #     country: 'Puerto Rico',
    #     description: "Buenas vacaciones y playas", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 4,
    #     latitude: 18.4671,
    #     longitude: -66.1185,
    #     price: 88,
    # )


    # Listing.create!(
    #     city: 'Singapore',
    #     country: 'Singapore',
    #     description: "City-states are making a comeback!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 3,
    #     latitude: 1.3521,
    #     longitude: 103.8198,
    #     price: 103,
    # )


    # Listing.create!(
    #     city: 'Miami',
    #     country: 'Florida',
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 4,
    #     latitude: 25.7617,
    #     longitude: -80.1918,
    #     price: 148,
    # )


    # Listing.create!(
    #     city: 'Amsterdam',
    #     country: 'Netherlands',
    #     description: "City-states are making a comeback!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 3,
    #     latitude: 52.3676,
    #     longitude: 4.9041,
    #     price: 214,
    # )


    # Listing.create!(
    #     city: 'Boston',
    #     country: 'Massachusetts',
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 1,
    #     latitude: 42.3601,
    #     longitude: -71.0589,
    #     price: 173,
    # )


    # Listing.create!(
    #     city: 'Mumbai',
    #     country: 'India',
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 1,
    #     latitude: 19.0760,
    #     longitude: 72.8777,
    #     price: 56,
    # )


    # Listing.create!(
    #     city: 'Hong Kong',
    #     country: 'China',
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 3,
    #     latitude: 22.3193,
    #     longitude: 114.1694,
    #     price: 386,
    # )


    # Listing.create!(
    #     city: 'Bondai Beach',
    #     country: 'Australia',
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 3,
    #     latitude: -33.8915,
    #     longitude: 151.2767,
    #     price: 162,
    # )


    # Listing.create!(
    #     city: 'Amalfi Coast',
    #     country: 'Italy',
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 3,
    #     latitude: 40.6333,
    #     longitude: 14.6029,
    #     price: 128,
    # )


    # Listing.create!(
    #     city: 'Arcachon',
    #     country: 'France',
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 3,
    #     latitude: 44.6523,
    #     longitude: -1.1785,
    #     price: 46,
    # )


    # Listing.create!(
    #     city: 'Vancouver',
    #     country: 'Canada',
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 1,
    #     latitude: 49.2827,
    #     longitude: -123.1207,
    #     price: 172,
    # )


    # Listing.create!(
    #     city: 'Pulau Kapas',
    #     country: 'Malaysia',
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 3,
    #     latitude: 5.2190,
    #     longitude: 103.2649,
    #     price: 96,
    # )


    # Listing.create!(
    #     city: 'Atlantis',
    #     country: 'Atlantis',
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 3,
    #     latitude: -48.8767,
    #     longitude: -123.3933,
    #     price: 1729,
    # )


    # Listing.create!(
    #     city: 'Luanda',
    #     country: 'Angola',
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 4,
    #     latitude: -8.8147,
    #     longitude: 13.2302,
    #     price: 649,
    # )


    # Listing.create!(
    #     city: 'Providence',
    #     country: 'Rhode Island',
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 4,
    #     latitude: 41.8240,
    #     longitude: -71.4128,
    #     price: 72,
    # )


    # Listing.create!(
    #     city: 'Montreux',
    #     country: 'Switzerland',
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 1,
    #     latitude: 46.4312,
    #     longitude: 6.9107,
    #     price: 104,
    # )


    # Listing.create!(
    #     city: 'Odessa',
    #     country: 'Ukraine',
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 3,
    #     latitude: 46.4825,
    #     longitude: 30.7233,
    #     price: 54,
    # )


    # Listing.create!(
    #     city: 'Ajaccio',
    #     country: 'France',
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 3,
    #     latitude: 41.9192,
    #     longitude: 8.7386,
    #     price: 41,
    # )


    # Listing.create!(
    #     city: 'San Francisco (west)',
    #     country: 'California',
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 3,
    #     latitude: 37.7180,
    #     longitude: -122.4772,
    #     price: 284,
    # )


    # Listing.create!(
    #     city: 'San Francisco (east)',
    #     country: 'California',
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 3,
    #     latitude: 37.7277,
    #     longitude: -122.3932,
    #     price: 411,
    # )


    # Listing.create!(
    #     city: 'Staten Island',
    #     country: 'New York',
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 3,
    #     latitude: 40.6427,
    #     longitude: -74.0799,
    #     price: 108,
    # )


    # Listing.create!(
    #     city: 'Bronx',
    #     country: 'New York',
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 3,
    #     latitude: 40.8553,
    #     longitude: -73.8640,
    #     price: 93,
    # )


    # Listing.create!(
    #     city: 'New Orleans',
    #     country: 'Louisiana',
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 1,
    #     latitude: 29.9511,
    #     longitude: -90.0715,
    #     price: 117,
    # )


    # Listing.create!(
    #     city: 'Kampala',
    #     country: 'Uganda',
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 1,
    #     latitude: 0.3476,
    #     longitude: 32.5825,
    #     price: 13,
    # )


    # Listing.create!(
    #     city: 'Shanghai',
    #     country: 'China',
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 3,
    #     latitude: 31.2304,
    #     longitude: 121.4737,
    #     price: 168,
    # )


    # Listing.create!(
    #     city: 'Cartagena',
    #     country: 'Colombia',
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 4,
    #     latitude: 10.3932,
    #     longitude: -75.4832,
    #     price: 39,
    # )


    # Listing.create!(
    #     city: 'Cozumel',
    #     country: 'Mexico',
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 4,
    #     latitude: 20.5072,
    #     longitude: -86.9446,
    #     price: 57,
    # )


    # Listing.create!(
    #     city: 'Lima',
    #     country: 'Peru',
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 4,
    #     latitude: -12.0464,
    #     longitude: -77.0428,
    #     price: 41,
    # )


    # Listing.create!(
    #     city: 'Valparaiso',
    #     country: 'Chile',
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 4,
    #     latitude: -33.0472,
    #     longitude: -71.6127,
    #     price: 66,
    # )


    # Listing.create!(
    #     city: 'Saint-Malo',
    #     country: 'France',
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 4,
    #     latitude: 48.6493,
    #     longitude: -2.0257,
    #     price: 73,
    # )


    # Listing.create!(
    #     city: 'Valencia',
    #     country: 'Spain',
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 4,
    #     latitude: 39.4699,
    #     longitude: -0.3763,
    #     price: 94,
    # )


    # Listing.create!(
    #     city: 'Lisbon',
    #     country: 'Portugal',
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 1,
    #     latitude: 38.7223,
    #     longitude: -9.1393,
    #     price: 58,
    # )


    # Listing.create!(
    #     city: 'Abidjan',
    #     country: "Côte d'Ivoire",
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 3,
    #     latitude: 5.3600,
    #     longitude: -4.0083,
    #     price: 38,
    # )


    # Listing.create!(
    #     city: 'Reykjavik ',
    #     country: "Iceland",
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 3,
    #     latitude: 64.1466,
    #     longitude: -21.9426,
    #     price: 80,
    # )


    # Listing.create!(
    #     city: 'Bemidji ',
    #     country: "Minnesota",
    #     description: "Stay here -- it'll be a great experience!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/441748be-b4e4-4261-af0c-aff299ebbad9.jpg?im_w=960',
    #     lister_id: 1,
    #     latitude: 47.4716,
    #     longitude: -94.8827,
    #     price: 67,
    # )


    # Listing.create!(
    #     city: 'Isla del Sol',
    #     country: "Bolivia",
    #     description: "Highest navigable lake on earth!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/acd82b24-eb27-41be-8487-ba4b5d70568f.jpg?im_w=1200',
    #     lister_id: 4,
    #     latitude: -16.0172,
    #     longitude: -69.1780,
    #     price: 32,
    # )


    # Listing.create!(
    #     city: 'Portofino',
    #     country: "Italy",
    #     description: "So pretty!", 
    #     pictures_url: 'https://a0.muscache.com/im/pictures/acd82b24-eb27-41be-8487-ba4b5d70568f.jpg?im_w=1200',
    #     lister_id: 1,
    #     latitude: 44.3032,
    #     longitude: 9.2098,
    #     price: 94,
    # )

    #Add Iguazu

    puts "Done!"
  end