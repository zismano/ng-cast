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

  template: `
    <ul class="video-list">
      <video-list-entry
          index="$index"
          video-clicked="$ctrl.videoClicked"
          ng-repeat="video in $ctrl.videos track by $index"
          video="video">
      </video-list-entry>
    </ul>`

});