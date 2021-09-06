json.array! @guests do |guest|
  json.name guest.name
  json.age guest.age
  json.favorite_color guest.favorite_color

  json.array! guest.gifts do |gift|
    
  end
end

# json.partial! 'guest', guest