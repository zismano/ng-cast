angular.module('video-player')
.component('videoList', {

  bindings: {
    video: '<', // ??????????????
    videos: '<',
    onClick: '<',
    videoClicked: '<'
  },
  
  controller: function() {
    this.onClick = () => {};
  },

  templateUrl: 'src/templates/videoList.html'

});