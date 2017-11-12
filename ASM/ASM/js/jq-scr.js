  /*Menu-toggle*/
    $("#wrapper").toggleClass("active");
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
    });



      function activeh() {
        $("#activeh").addClass("active");
        $("#activep").removeClass("active");
        $("#activepp").removeClass("active");
      }
      function activep() {
        $("#activep").addClass("active");
        $("#activeh").removeClass("active");
        $("#activepp").removeClass("active");
      }
       function activepp() {
        $("#activepp").addClass("active");
        $("#activeh").removeClass("active");
        $("#activep").removeClass("active");
      }

    $(document).ready(function() {
        $('#Carousel').carousel({
            interval: 1800
        })
    });


    $(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideDown("fast");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideUp("fast");
            $(this).toggleClass('open');       
        }
    );
});