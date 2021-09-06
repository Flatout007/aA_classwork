const APIUtil = {
  followUser: id => {
    return $.ajax({
      method: "POST",
      url: `/users/${this.userId}/follow`,
      dataType: "JSON"
    })
    .then(() => this._changeState())
  },

  unfollowUser: id => {
    return $.ajax({
      method: "DELETE",
      url: `/users/${this.userId}/follow`,
      dataType: "JSON"
    })
    .then(() => this._changeState())
  }

  _changeState() {
    if (this.followState === "unfollowed") {
      this.followState = "followed"
    } else {
      this.followState = "unfollowed"
    }
    this.render()
  }
  
};

module.exports = APIUtil;