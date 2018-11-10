FactoryGirl.define do

	factory :message do
		content    Faker::Lorem.sentence
		image      File.open("#{Rails.root}/no_image.jpg")
		user
		group
	end
end
