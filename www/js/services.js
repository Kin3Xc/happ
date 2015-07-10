angular.module('happ.services', [])

.factory("Historys", function($firebaseArray) {
  var hstoriasRef = new Firebase("https://hisapp.firebaseio.com/historias");
  return $firebaseArray(hstoriasRef);
})