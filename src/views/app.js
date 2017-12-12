var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    
    // this.videos = new Videos(window.exampleVideoData);
    this.videos = new Videos(window.exampleVideoData);
    console.log(this.videos.search);
    var returnedData = this.videos.search('backbone');

    console.log(returnedData);
    // this.videos = new Videos(data.items);
    
    
    this.render();

  },

  render: function() {
    this.$el.html(this.template());

    new SearchView({
      el: this.$('.search'),
      collection: this.videos
    }).render();

    new VideoPlayerView({
      el: this.$('.player'), 
      collection: this.videos
    }).render();

    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();

    return this.$el;
  },

  template: templateURL('src/templates/app.html')

});
