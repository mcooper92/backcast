var VideoListEntryView = Backbone.View.extend({

  events: {
    'click .video-list-entry-title': 'handleClick'  
  },

  handleClick: function() {
    console.log('clicked');
    this.model.select();
    
  },
  

  render: function() {
  // 'this' is an instance of a video view object
  // this.model is the video object
    this.$el.html(this.template(this.model.attributes));

    var title = this.model.attributes.snippet.title;
    var description = this.model.attributes.snippet.description;
    var imageSrc = this.model.attributes.snippet.thumbnails.default.url;

    this.$el.find('img').attr('src', imageSrc);
    this.$el.find('div.video-list-entry-title').text(title);
    this.$el.find('div.video-list-entry-detail').text(description);



    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
