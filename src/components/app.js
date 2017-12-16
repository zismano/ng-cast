angular.module('video-player')

.component('app', {

  controller: function(youTube) { // parameter required for youTube dependency injection

    this.selectVideo = (index) => {
      console.log(this);
      this.currentVideo = this.videos[index];
    };

    this.youtube = youTube;  // binding youTube for search
    this.result = (videoDataArray) => {
      this.videos = videoDataArray;
      this.currentVideo = videoDataArray[0];
    };

    this.searchResults = (searchText) => {
      
      youTube.search.call(this, searchText, this.result);  // binding youTube for search
      
    };

    this.searchResults(''); // initialization
  },

  templateUrl: 'src/templates/app.html'


});
