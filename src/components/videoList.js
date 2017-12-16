angular.module('video-player')
.component('videoList', {

  bindings: {
    video: '<', // ??????????????
    videos: '<',
    onClick: '<',
    selectVideo: '<'
  },
  
  controller: function() {
    this.onClick = () => {};
  },

  templateUrl: 'src/templates/videoList.html'

});