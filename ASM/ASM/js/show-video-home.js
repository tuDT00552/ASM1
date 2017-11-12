	  


	 //  var YOUTUBE_API = "https://content.googleapis.com/youtube/v3/search?q=trinh dinh quang&type=video&maxResults=4&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc";
	 //  var YOUTUBE_API1 = "https://content.googleapis.com/youtube/v3/search?q=den vau&type=video&maxResults=4&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc";
	 //  var YOUTUBE_API2 = "https://content.googleapis.com/youtube/v3/search?q=tam ka pkl&type=video&maxResults=4&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc";

	 //    $.ajax({
	 //    url: YOUTUBE_API, 
	 //    type: "GET",
	 //    data: {},
	 //    success: function(response){
	 //      var content = '';   
	 //      for (var i = 0; i < response.items.length; i++) {
	 //        var videoId = response.items[i].id.videoId;
	 //        var videoTitle = response.items[i].snippet.title;
	 //        var videoThumb = response.items[i].snippet.thumbnails.medium.url;
	 //            content += '<div class="col-md-3"><a class="thumbnail"><img onclick="showvideo(\''+ videoId +'\')" src="'+ videoThumb +'" alt="Image" style="max-width:100%;"></a><div class="text-center"><strong><div class="titlevideo">' + videoTitle + '</div></strong></div></div>';
	 //      }
	 //      $('#my-content').html(content);
	 //    },
	 //    error: function(a, b, c){

	 //    }
	 //  });

	 //    $.ajax({
	 //    url: YOUTUBE_API1, 
	 //    type: "GET",
	 //    data: {},
	 //    success: function(response){
	 //      var content = '';   
	 //      for (var i = 0; i < response.items.length; i++) {
	 //        var videoId = response.items[i].id.videoId;
	 //        var videoTitle = response.items[i].snippet.title;
	 //        var videoThumb = response.items[i].snippet.thumbnails.medium.url;
	 //            content += '<div class="col-md-3"><a class="thumbnail"><img onclick="showvideo(\''+ videoId +'\')" src="'+ videoThumb +'" alt="Image" style="max-width:100%;"></a><div class="text-center"><strong><div class="titlevideo">' + videoTitle + '</div></strong></div></div>';
	 //      }
	 //      $('#my-content1').html(content);
	 //    },
	 //    error: function(a, b, c){

	 //    }
	 //  });

	 //    $.ajax({
	 //    url: YOUTUBE_API2, 
	 //    type: "GET",
	 //    data: {},
	 //    success: function(response){
	 //      var content = '';   
	 //      for (var i = 0; i < response.items.length; i++) {
	 //        var videoId = response.items[i].id.videoId;
	 //        var videoTitle = response.items[i].snippet.title;
	 //        var videoThumb = response.items[i].snippet.thumbnails.medium.url;
	 //            content += '<div class="col-md-3"><a class="thumbnail"><img onclick="showvideo(\''+ videoId +'\')" src="'+ videoThumb +'" alt="Image" style="max-width:100%;"></a><div class="text-center"><strong><div class="titlevideo">' + videoTitle + '</div></strong></div></div>';;
	 //      }
	 //      $('#my-content2').html(content);
	 //    },
	 //    error: function(a, b, c){

	 //    }
	 //  });

	 //    function showvideo(videoId) {
		//   $('#frame-video').attr('src','https://www.youtube.com/embed/'+ videoId +'');
		//   $('#titlevideo').attr('text',"");
		//   setTimeout(
		//   function () {
		//     $('#modal-video').modal();
		//   },400);
		// }