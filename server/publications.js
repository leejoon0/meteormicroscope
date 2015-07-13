Meteor.publish('posts', function() {
//Meteor.publish('allPosts', function() {
  return Posts.find();
  //return Posts.find({flagged: false, author: author);
});