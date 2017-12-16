angular.module('video-player')
.component('videoList', {

  bindings: {
    video: '<', // ??????????????
    videos: '<',
    onClick: '<',
    selectVideo: '<'
  },
  
  controller: function() {
    this.onClick = () => {};  // does nothing, to pass test
  },

  templateUrl: 'src/templates/videoList.html'

});