Meteor.publish('posts', function() {
//Meteor.publish('allPosts', function() {
  return Posts.find();
  //return Posts.find({flagged: false, author: author);
});

Meteor.publish('comments', function(postId) {
  check(postId, String);
  return Comments.find({postId: postId});
  //return Comments.find();
});

Meteor.publish('notifications', function() {  
  //return Notifications.find();
  return Notifications.find({userId: this.userId, read: false});
});