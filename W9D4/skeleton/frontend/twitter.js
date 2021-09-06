const FollowToggle = require("./follow_toggle")

$(() => {
  const button = $(".follow-toggle")
  button.each((i, el) => {
    new FollowToggle(el)
  })
})