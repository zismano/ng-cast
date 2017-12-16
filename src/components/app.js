angular.module('video-player')

.component('app', {

  controller: function(youTube) { // parameter required for youTube dependency injection
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];

    this.selectVideo = (index) => {
      console.log(this);
      this.currentVideo = this.videos[index];
    };

    this.youtubeService = youTube;  // binding youTube for search

    this.searchResults = (searchText) => {
      //console.log('testInApp');
      //console.log(this);
      this.youtubeService.getAPIResults.call(this, searchText, (videoDataArray) => {
        this.videos = videoDataArray;
      });  // binding youTube for search
      //console.dir(results);
      //this.videos = results;
    };
  },

  templateUrl: 'src/templates/app.html'


});
