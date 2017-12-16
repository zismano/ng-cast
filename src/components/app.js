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

    this.searchResults = (youTube) => {
      console.log('testInApp');
      console.log(this);
      this.youtubeService.getAPIResults();  // binding youTube for search
    };
  },

  templateUrl: 'src/templates/app.html'


});
