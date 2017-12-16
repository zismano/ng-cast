angular.module('video-player')
.service('youTube', function($http) {
  
  this.search = function(queryString, callback, maxResults = 5) {

    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        'q': queryString || 'dogs',
        'maxResults': maxResults,
        'key': window.YOUTUBE_API_KEY,
        'part': 'snippet',
        'type': 'video',
        'videoEmbeddable': 'true'
      }
    }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
      callback(response.data.items);

    }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
      console.log('Error receiving data from API');
    });
  };

  
});


