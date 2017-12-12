var SearchView = Backbone.View.extend({

  // from app.js: 
  // el: '.search'
  // collection: videos

  events: {
    'click .btn': 'searchWithString'  
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },


  // get the string from search input
  searchWithString: function() {
    var searchString = $('.form-control').val();
    this.collection.search(searchString);
  },


  template: templateURL('src/templates/search.html')

});
