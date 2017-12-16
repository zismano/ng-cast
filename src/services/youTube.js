angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  // Simple GET request example:

  this.getAPIResults = function(queryString, component, callback, maxResults = 5) {
    console.log('testAPI');
    self = this;
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        'q': queryString || 'dogs',
        'maxResults': maxResults,
        'key': window.YOUTUBE_API_KEY,
        'part': 'snippet'
      }
    }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
      component.videos = response.data.items;
      return response.data.items;
    }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
    });
  };

  
});


