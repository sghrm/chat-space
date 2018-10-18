json.id @message.id
json.content @message.content
json.name @message.user.name
json.created_at @message.created_at.to_s(:datetime)
json.image @message.image
