angular.module('video-player')

.component('app', {

  controller: function(youTube) { // parameter required for youTube dependency injection
    // this.videos = window.exampleVideoData;
    // this.currentVideo = this.videos[0];

    this.selectVideo = (index) => {
      console.log(this);
      this.currentVideo = this.videos[index];
    };

    this.youtubeService = youTube;  // binding youTube for search

    this.searchResults = (searchText) => {
      
      this.youtubeService.search.call(this, searchText, (videoDataArray) => {
        this.videos = videoDataArray;
        this.currentVideo = this.videos[0];
      });  // binding youTube for search
      
    };

    this.searchResults('');
  },

  templateUrl: 'src/templates/app.html'


});
