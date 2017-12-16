angular.module('video-player')
.component('videoList', {

  bindings: {
    videos: '<'
  },

  template: `
    <ul class="video-list">
      <video-list-entry
          video="video"
          ng-repeat="video in $ctrl.videos">
      </video-list-entry>
    </ul>`

});
