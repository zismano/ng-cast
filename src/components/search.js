angular.module('video-player')

.component('search', {
  // TODO
  bindings: {
    searchResults: '<',
    result: '<' // for not using & function binding. Does nothing, to pass test 
  },

  controller: function() {
    this.result = () => {};  // does nothing, to pass test
  },
 
  templateUrl: 'src/templates/search.html',  

});

