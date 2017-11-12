 var app = angular.module("myApp", ["ngRoute"]);
      app.config(function($routeProvider) {
          $routeProvider.when("/home", {
              templateUrl : "home.html"
          }).when("/playlist", {
              templateUrl : "playlist.html"
          }).when("/login", {
              templateUrl : "login.html"
          }).when("/res", {
              templateUrl : "register.html"
          });
    });

app.controller('videocontrol', function($scope, $http){
  var videoFrame = document.getElementById("video-frame");
  $http.get("https://content.googleapis.com/youtube/v3/search?q=tam ka pkl&type=video&videoEmbeddable=true&videoSyndicated=true&maxResults=4&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc")
  .then(function(response) {
    $scope.listVideo = response.data.items;
  });

  var videoFrame = document.getElementById("video-frame");
  $http.get("https://content.googleapis.com/youtube/v3/search?q=dalab&type=video&videoEmbeddable=true&videoSyndicated=true&maxResults=4&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc")
  .then(function(response) {
    $scope.listVideo1 = response.data.items;
  });

    var videoFrame = document.getElementById("video-frame");
  $http.get("https://content.googleapis.com/youtube/v3/search?q=den vau&type=video&videoEmbeddable=true&videoSyndicated=true&maxResults=4&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc")
  .then(function(response) {
    $scope.listVideo2 = response.data.items;
  });

    $scope.showVideo = function(videoId){
    videoFrame.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
    setTimeout(function(){ 
      $scope.isShowVideo = true;
    }, 300);
  }

    $scope.showVideo1 = function(videoId){
    videoFrame.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
    setTimeout(function(){ 
      $scope.isShowVideo = true;
    }, 300);
  }


    $scope.showVideo2 = function(videoId){
    videoFrame.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
    setTimeout(function(){ 
      $scope.isShowVideo = true;
    }, 300);
  }

})


    
    



