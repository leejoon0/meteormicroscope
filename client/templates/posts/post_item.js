Template.postItem.helpers({
  ownPost: function() {
    // 다른 사용자의 수정 폼으로의 링크를 보여주길 원하지는 않는다. ownPost
    return this.userId === Meteor.userId();
  },
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
  /*commentsCount: function() {
    return Comments.find({postId: this._id}).count();
  }*/
});