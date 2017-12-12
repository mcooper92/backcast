var Videos = Backbone.Collection.extend({

  model: Video,
  url: '../data/exampleVideoData.js'


  // collection object has 'models' property 
  // (array of all video objects)

  // whenever that collection is updated, 
  // the app should re-render


});



// var videos = new Videos(window.exampleVideoData);