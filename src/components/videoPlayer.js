angular.module('video-player')

.component('videoPlayer', {
  // TODO
  bindings: {
    video: '<',
    videos: '<'   // ????????????
  },
  templateUrl: 'src/templates/videoPlayer.html'
});