puts "🌱 Seeding spices..."

# Seed your database here
Maker.create(
    username: "Head Setter"
)
User.create(
    username: "SpiderMan"
)

20.times { 
    Climbproblem.create(
        favorite:Faker::Boolean.boolean,
        in_progress:Faker::Boolean.boolean,
        completed:Faker::Boolean.boolean,
        climber_feedback:Faker::TvShows::Simpsons.quote,
        route_rating:rand(0..5),
        user_id:1,
        problem_id:rand(1..16)
    )     



   Problem.create(
    difficulty:0,
    grip_color:Faker::Color.color_name,
    technique:"Pincher",
    location:rand(0..10),,
    end_date:Date.parse('03-20-2022', '%m-%d-%Y'),
    problem_description:"A nice warmup. Only a few moves, but get your fingers ready.",
    maker_id:1
    )
    Problem.create(
    difficulty:2,
    grip_color:Faker::Color.color_name,
    technique:"Jugs",
    location:rand(0..10),,
    end_date:Date.parse('03-20-2022', '%m-%d-%Y'),
    problem_description:"The pitch adds the challenge. Enjoy the jug holds.",
    maker_id:1
    )
    Problem.create(
        difficulty:6,
        grip_color:Faker::Color.color_name,
        technique:"Crimps",
        location:rand(0..10),,
        end_date:Date.parse('03-20-2022', '%m-%d-%Y'),
        problem_description:"Ball up those hands, but not too tight. This one is a long one too.",
        maker_id:1
        )
    Problem.create(
        difficulty:2,
        grip_color:Faker::Color.color_name,
        technique:"Jugs",
        location:rand(0..10),,
        end_date:Date.parse('03-20-2022', '%m-%d-%Y'),
        problem_description:"The pitch adds the challenge. Enjoy the jug holds.",
        maker_id:1
        )
    Problem.create(
        difficulty:7,
        grip_color:Faker::Color.color_name,
        technique:"Slopers",
        location:rand(0..10),,
        end_date:Date.parse('03-20-2022', '%m-%d-%Y'),
        problem_description:"The grips are big but there is not a lot to hold.",
        maker_id:1
        )
    Problem.create(
        difficulty:3,
        grip_color:Faker::Color.color_name,
        technique:"Undercling",
        location:rand(0..10),,
        end_date:Date.parse('03-20-2022', '%m-%d-%Y'),
        problem_description:"Turn that grip upside down as you go upside down.",
        maker_id:1
        )
    Problem.create(
        difficulty:1,
        grip_color:Faker::Color.color_name,
        technique:"Sidepull",
        location:rand(0..10),,
        end_date:Date.parse('03-20-2022', '%m-%d-%Y'),
        problem_description:"This will have you moving sideways as your grip is vertical.",
        maker_id:1
        )
    Problem.create(
        difficulty:4,
        grip_color:Faker::Color.color_name,
        technique:"Palming",
        location:rand(0..10),,
        end_date:Date.parse('03-20-2022', '%m-%d-%Y'),
        problem_description:"Wedge your up diagonally.",
        maker_id:1
        )
    Problem.create(
    difficulty:7,
    grip_color:Faker::Color.color_name,
    technique:"Pincher",
    location:rand(0..10),,
    end_date:Date.parse('03-20-2022', '%m-%d-%Y'),
    problem_description:"Pinchy and long.",
    maker_id:1
    )
    Problem.create(
    difficulty:5,
    grip_color:Faker::Color.color_name,
    technique:"Jugs",
    location:rand(0..10),,
    end_date:Date.parse('03-20-2022', '%m-%d-%Y'),
    problem_description:"You will like the holds, just not the dyno.",
    maker_id:1
    )
    Problem.create(
        difficulty:1,
        grip_color:Faker::Color.color_name,
        technique:"Crimps",
        location:rand(0..10),,
        end_date:Date.parse('03-20-2022', '%m-%d-%Y'),
        problem_description:"See if you can do it in less than 4 moves.",
        maker_id:1
        )
    Problem.create(
        difficulty:8,
        grip_color:Faker::Color.color_name,
        technique:"Palming",
        location:rand(0..10),,
        end_date:Date.parse('03-20-2022', '%m-%d-%Y'),
        problem_description:"No pulling yourself up these big moves",
        maker_id:1
        )
    Problem.create(
        difficulty:3,
        grip_color:Faker::Color.color_name,
        technique:"Slopers",
        location:rand(0..10),,
        end_date:Date.parse('03-20-2022', '%m-%d-%Y'),
        problem_description:"Big grips but small moves.",
        maker_id:1
        )
    Problem.create(
        difficulty:11,
        grip_color:Faker::Color.color_name,
        technique:"Undercling",
        location:rand(0..10),,
        end_date:Date.parse('03-20-2022', '%m-%d-%Y'),
        problem_description:"You will need the underclings when you get horizontal on the overhang.",
        maker_id:1
        )
    Problem.create(
        difficulty:4,
        grip_color:Faker::Color.color_name,
        technique:"Sidepull",
        location:rand(0..10),,
        end_date:Date.parse('03-20-2022', '%m-%d-%Y'),
        problem_description:"To go up, you will have to grip to the side.",
        maker_id:1
        )
    Problem.create(
        difficulty:3,
        grip_color:Faker::Color.color_name,
        technique:"Palming",
        location:rand(0..10),,
        end_date:Date.parse('03-20-2022', '%m-%d-%Y'),
        problem_description:"No more pulling. Only pushing, and twisting.",
        maker_id:1
        )
    
puts "✅ Done seeding!"
