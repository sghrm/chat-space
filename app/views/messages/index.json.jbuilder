json.array! @new_messages do |message|
  json.id              message.id
  json.content         message.content
  json.image           message.image.url
  json.name            message.user.name
  json.created_at      message.created_at.to_s(:default)
end
