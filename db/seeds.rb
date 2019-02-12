user = User.new(
  :name                  => "Alexander Campbell",
  :email                 => "admin@test.com",
  :password              => "password",
  :password_confirmation => "password",
  :image                 => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXWyR8VLP1_P5oV9DBEzUub5c4B9M866xOS12Rk8JQfSYFqO2X",
  :resume_image          => "https://coda.newjobs.com/api/imagesproxy/ms/niche/images/articles/Mack/write-a-resume.jpg"
)
user.save!
puts 'User seeded successfully!'
