Posts = new Mongo.Collection('posts');

// $ meteor remove insecure -> 실행후
Posts.allow({  
    insert: function(userId, doc) {    
        // only allow posting if you are logged in    
        return !! userId;
    }
});