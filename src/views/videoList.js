var VideoListView = Backbone.View.extend({

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    var videoList = this.$el.find('div.video-list');
    videoList.children().detach();

    //create videoListEntryView instance for the video
    //call videoListEntryView.render()
    videoList.append(this.collection.map(function(video) {
      var viewListEntryView = new VideoListEntryView({ model: video });
      return viewListEntryView.render();
    }));


    return this.$el;
  },

  template: templateURL('src/templates/videoList.html')

});
