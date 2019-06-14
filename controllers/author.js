var authorModel = require('../model/author.model');
var storyModel  = require('../model/story.model');

module.exports = {
    getAll : function(req,res,next){
        storyModel
            .find({ title: 'Bob goes sledding' })
            .populate('author','name',null) //This populates the author id with actual author information!
            .exec(function (err, story) {
            if (err) return handleError(err);
            res.send(story);
            // prints "The author is Bob Smith"
            });
    },
    insert : function(req,res,next) {
        var bob = new authorModel({ name: 'Piyush chourey' });
        bob.save(function (err) {
            if (err) return handleError(err);
          
            //Bob now exists, so lets create a story
            var story = new storyModel({
              title: "Bob goes sledding",
              author: bob._id    // assign the _id from the our author Bob. This ID is created by default!
            });
          
            story.save(function (err) {
              if (err) return handleError(err);
              // Bob now has his story
            });
        });
    }
}