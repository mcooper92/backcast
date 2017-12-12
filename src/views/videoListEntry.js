var VideoListEntryView = Backbone.View.extend({

  
  
  // initialize: function() {
  // // set up event listener when the title is clicked
  //   // 
  //   this.$el.find('div.video-list-entry-title').on('click', function() {
  //     console.log(this);
  //   });

  // },

  render: function() {
  // 'this' is an instance of a video view object
  // this.model is the video object
    this.$el.html(this.template(this.model.attributes));

    console.log(this.model);

    var title = this.model.attributes.snippet.title;
    var description = this.model.attributes.snippet.description;
    var imageSrc = this.model.attributes.snippet.thumbnails.default.url;

    this.$el.find('img').attr('src', imageSrc);
    this.$el.find('div.video-list-entry-title').text(title);
    this.$el.find('div.video-list-entry-detail').text(description);





    //set up event listener on each title
    this.$el.find('div.video-list-entry-title').on('click', this.model.select);




    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
