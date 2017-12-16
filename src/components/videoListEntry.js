angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    index: '<',
    videoClicked: '<'
  },
  controller: function() {
    console.log(this);
  },
  
  templateUrl: 'src/templates/videoListEntry.html' 
});