var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
  },

  select: function() {
    // create new VideoPlayerView with the selected model 
    // overwrites default video
    new VideoPlayerView({
      el: $('.player'),
      model: this
    }).render();
    
    this.trigger('select', this);
  }

});
