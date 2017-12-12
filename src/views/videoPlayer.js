var VideoPlayerView = Backbone.View.extend({


  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');

    this.$el.html(this.template());

    // probably need to update to selected video
    var video = new Video(window.exampleVideoData[0]);



    // var videoView = new VideoListEntryView({ model: video });

    var title = video.attributes.snippet.title;
    var description = video.attributes.snippet.description;
    var iframeSrc = 'https://www.youtube.com/embed/' + video.id;

    this.$el.find('iframe').attr('src', iframeSrc);
    this.$el.find('h3.title').text(title);
    this.$el.find('div.description').text(description);

    console.log(this.$el);

    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
