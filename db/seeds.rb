# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.find_or_initialize_by(email: 'john@rambo.com')
user.password = 'password'
user.password_confirmation = 'password'

restaurant = user.restaurants.find_or_initialize_by(name: 'Bellagamba', address: 'Armenia St')
restaurant2 = user.restaurants.find_or_initialize_by(name: 'Pizza Hut', address: 'Armenia St')
restaurant3 = user.restaurants.find_or_initialize_by(name: 'La Guitarrita', address: 'Armenia St')

user.save

user2 = User.find_or_initialize_by(email: 'jack@baueer.com')
user2.password = 'password'
user2.password_confirmation = 'password'

restaurant = user2.restaurants.find_or_initialize_by(name: 'Bellagamba', address: 'Armenia St')

user2.save

p "Seed creado"
