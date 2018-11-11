FactoryGirl.define do
  factory :message do
    content Faker::Lorem.sentence
    image File.open("#{Rails.root}/public/images/IMG_2906.jpg")
    user
    group
  end
end
