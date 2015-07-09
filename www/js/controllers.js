angular.module('happ.controllers', [])
	
//Controllador para cargar todo el home (historias)
.controller('HomeCtrl', function($scope, $location, $ionicHistory){
	$scope.showComment = false;
	$scope.showAdd = true;
	$scope.hideBack = false;

	$scope.like = 10;

	//Mostrar y ocultar comentarios (Aun no funciona completo)
	$scope.showComments = function(){
		$scope.showComment = true;
	}

	//Mostrar boton Add al hacer clic en atras
	$scope.showIconAdd = function(){
		$scope.showAdd = true;
		$ionicHistory.goBack();
	}

	$scope.newHistory = function(){
		$scope.showAdd = false;
		$scope.hideBack = true;
		$location.url('/historia');
	}

	$scope.likeNew = function(){
		$scope.like = $scope.like +1;
	}
})

//Controlador para agregar una nueva historia
.controller('HistoriaCtrl', function($scope, $location){
	$scope.txtHistoria = "";
});