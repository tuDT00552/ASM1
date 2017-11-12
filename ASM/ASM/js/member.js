var REGISTER_URL = "https://youtube-api-challenger.appspot.com/members";

app.controller('rescontrol', function($scope, $http) {
 if($scope.Obj == undefined){
  $scope.Obj = {};
  $scope.Obj.data = {};
  $scope.Obj.data.attributes = {};
 }

 $scope.btnRes = function(){  
  $scope.Obj.data.type = "Member";
  $scope.Obj.data.attributes.birthDay = 15066499900231;
  $scope.Obj.data.attributes.gender = 1;
  
     $http({
      url : REGISTER_URL,
      method : "POST",
      data: JSON.stringify($scope.Obj)        
     }).then(function mySuccess(response) {
         console.log(response);
         alert("thanh cong");
     }, function myError(response) {
         console.log(response);
     });
 }
})