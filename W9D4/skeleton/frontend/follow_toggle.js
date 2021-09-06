const APIUtil = require("./api_util");

class FollowToggle {
  constructor(el) {
    this.$el = $(el)
    this.userId = this.$el.data("user-id")
    this.followState = this.$el.data("initial-follow-state")
    this.render();
    this.$el.on("click", this.handleClick.bind(this));
  }

  render() {
    if (this.followState === "unfollowing") {
      this.$el.prop('disabled', true);
      this.$el.text("unfollowing");
    }
    else if (this.followState === "following") {
      this.$el.prop('disabled', true);
      this.$el.text("following");
    }
    else {
      this.$el.prop('disabled', false);
      let result = this.followState === "unfollowed" ? "Follow!" : "Unfollow!";
      this.$el.text(result);
    }
  }

  handleClick(e) {
    e.preventDefault();
    if (this.followState === "unfollowed") {
      this.followState = "following";
      this.render();
      APIUtil.followUser(this.userId);
    } else {
      this.followState = "unfollowing";
      APIUtil.unfollowUser(this.userId);
    }
  }
}


module.exports = FollowToggle