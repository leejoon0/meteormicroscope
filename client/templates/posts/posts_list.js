
Template.postsList.helpers({
  posts: function(){
//    return Posts.find({author: 'bob-smith', category: 'JavaScript'});
      return Posts.find({}, {sort: {submitted: -1}});
      
  }
});
