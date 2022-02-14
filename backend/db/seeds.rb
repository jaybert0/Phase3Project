puts "🌱 Seeding spices..."

# Seed your database here
Maker.create(
    username: Faker::Name.name
)
puts "✅ Done seeding!"
