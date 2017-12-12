var VideoPlayerView = Backbone.View.extend({

  // from app.js: 
  // el: '.player'
  // collection: videos 
  // when invoked from model.select(), model: video

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');

    this.$el.html(this.template());

    var video = this.model || this.collection.models[0];
    

    var title = video.attributes.snippet.title;
    var description = video.attributes.snippet.description;
    var iframeSrc = 'https://www.youtube.com/embed/' + video.id;

    this.$el.find('iframe').attr('src', iframeSrc);
    this.$el.find('h3.title').text(title);
    this.$el.find('div.description').text(description);


    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
