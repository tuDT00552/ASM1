app.controller('logincontrol', function($scope, $http) {
	$scope.btnLogin = function(){
	    $scope.Obj.data.type = "MemberLogin";
		    console.log($scope.Obj);
		    $http({
		    	method: "POST",
		    	url: "https://youtube-api-challenger.appspot.com/authentication",
		    	data: $scope.Obj
		    }
		    ).then(function(reponse){
		    $scope.user = reponse.data.records;
		    }).then(function mySuccess(reponse){
		    // $scope.user = response.data;
		    alert("thanh cong");
		    }), function myError(response) {
		    $scope.user = response.statusText;
	    }
	}
	 
});