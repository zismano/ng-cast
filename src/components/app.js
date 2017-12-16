angular.module('video-player')

.component('app', {

  controller: function(youTube) {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];

    this.selectVideo = (index) => {
      console.log(this);
      this.currentVideo = this.videos[index];
    };

    this.searchResults = () => {};


    youTube.getAPIResults();
  },

  template: `<div id="app container">
  <nav class="navbar">
    <div class="col-md-6 col-md-offset-3">
      <search></search>
    </div>
  </nav>
  <div class="row">
    <div class="col-md-7">
      <video-player video="$ctrl.currentVideo" videos="$ctrl.videos"></video-player>
    </div>
    <div class="col-md-5">
      <video-list videos="$ctrl.videos" video="$ctrl.currentVideo" video-clicked="$ctrl.selectVideo"><h5><em>videoList</em> component goes here</h5></video-list>
    </div>
  <div>
  </div>`


});
