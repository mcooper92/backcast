var Videos = Backbone.Collection.extend({

  model: Video,
  // url: 'https://www.googleapis.com/youtube/v3/search',


  search: function(query, numOfResults) {
    var dataItems = '';

    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET', 
      data: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        query: query,
        maxResults: numOfResults || 5,
        type: 'video',
        videoEmbeddable: 'true'
      },
      success: function(data) {
        useReturnData(data);
      }
    });

    function useReturnData(data) {
      dataItems = data.items;
    }


    console.log(dataItems);
    return dataItems;
    
  }


});
