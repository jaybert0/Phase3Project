puts "🌱 Seeding spices..."

# Seed your database here
Maker.create(
    username: "Head Setter"
)
User.create(
    username: "SpiderMan"
)

15.times { 
    Climbproblem.create(
        favorite:Faker::Boolean.boolean,
        in_progress:Faker::Boolean.boolean,
        completed:Faker::Boolean.boolean,
        climber_feedback:Faker::TvShows::Simpsons.quote,
        route_rating:rand(0..5.0),
        user_id:1
        problem_id:Problem.all.sample.id
    )    
  }

  15.times { 
      Problem.create(
          difficulty:rand(0..16),
          grip_color:Faker::Color.color_name,
          technique:Faker::Kpop.i_groups,
          location:rand(0..10),
          end_date:2022-03-15,
          problem_description:Faker::TvShows::Seinfeld.quote,
          maker_id:1
      )
   }

puts "✅ Done seeding!"
