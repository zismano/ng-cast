angular.module('video-player')

.component('search', {
  // TODO
  bindings: {
    result: '<', // for not using & function binding. Does nothing, to pass test 
    service: '<'
  },
// 
  // controller: function(youTube) {

  //   this.$onInit = function() {
  //     //console.log('search controller called');
  //     //console.log(this);
  //     //this.service.search('', this.result);
  //   };
    

 // },
 
  templateUrl: 'src/templates/search.html'  

});

