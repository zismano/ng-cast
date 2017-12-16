angular.module('video-player')

.component('app', {

  controller: function(youTube) { // parameter required for youTube dependency injection

    // function passed to videoList, videoList passes function to videoListEntry which invokes when user clicks on title. Gets index from videoList view
    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
    };

    this.youtube = youTube;  // binding youTube for search

    // this callback is passed whenever we call yuotube API to handle response and updates the data and view
    this.result = (videoDataArray) => {
      this.videos = videoDataArray;
      this.currentVideo = videoDataArray[0];
    };

    // initializes live data on app first load
    this.searchResults = (searchText) => {
      
      youTube.search.call(this, searchText, this.result);  // binding youTube for search
      
    };

    // first initialization of app
    this.searchResults('');
  },

  templateUrl: 'src/templates/app.html'


});
