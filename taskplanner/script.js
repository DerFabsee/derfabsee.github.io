var app = angular.module('sch',[]);
var date = new Date();

app.controller('mainCtrl',function($scope) {
	$scope.all = [];
	$scope.post= "";
	$scope.postit = function(post) {
		var val = {
			time: date.toUTCString(),
			cont:post,
			done:false
		}
		$scope.all.push(val);
		$scope.post = "";
	}
	$scope.indexa = false;
	$scope.editit = function(index) {
		var po = $scope.all[index].cont;
		$scope.post = po;
		$scope.all.splice(index,1);
	}
	for(k=0;k<$scope.all.length;k++) {
		if(k.done) {
			k.time = date.toUTCString();
		}
	}
});