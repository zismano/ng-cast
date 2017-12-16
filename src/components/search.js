angular.module('video-player')

.component('search', {
  // TODO
  template: `
    <div class="search-bar form-inline">
      <input class="form-control" type="text" />
      <button class="btn" ng-click="youTube.getAPIResults()">
        <span class="glyphicon glyphicon-search"></span>
      </button>
    </div>`

});
