var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);


    
  },

  select: function() {


    // var videoEl = this.closest('.video-list-entry');

    // videoEl.attr('id', 'selected');
    //invoke re-render 


    // this.trigger('select', this);
  }

});
