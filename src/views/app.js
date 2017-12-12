var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());

    new SearchView({el: this.$('.search')}).render();
    new VideoPlayerView({el: this.$('.player')}).render();
    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();
    return this.$el;
  },

  template: templateURL('src/templates/app.html')

});
