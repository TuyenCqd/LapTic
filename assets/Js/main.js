$(document).ready(function() {
  $("#preload").fadeIn(300); // hiển thị div trong 0.5 giây
  $(window).scrollTop(0); // di chuyển đến đầu trang
});

$(window).on("load", function() {
  $("#preload").fadeOut(300); // ẩn div trong 0.5 giây khi trang đã tải xong
});


$(document).ready(function(){
  // Ẩn button ban đầu
    $('#arrow').hide();
  //khi cuộn tới
    $(window).scroll(function() {
      // Hiển thị hoặc ẩn button khi lướt trang
      if ($(this).scrollTop() > 100) {
        $('#arrow').fadeIn();
      } else {
        $('#arrow').fadeOut();
      }
    });
    // Cuộn trang lên đầu khi click vào button
    $('#arrow').click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 100);
      return false;
    });
        //chuyển số thành chữ
    function formatNumber(num) {
        if (num >= 1000) {
          return (num / 1000).toFixed(0) + "k";
        }
        return num;
      }
      //tăng biến đếm
      function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
         current = start,
         range = end - start,
         increment = end > start ? 1 : -1,
         step = Math.abs(Math.floor(duration / range));
         
        if (end <= 1000) {
          let timer = setInterval(() => {
            current += increment;
            if((id=="count1") || (id=="count4")){
                obj.textContent = current;
            }
            else{
                obj.textContent = formatNumber(current);
            }
            if (current == end) {
              clearInterval(timer);
            }
          }, step);
        } else {
          let timer = setInterval(() => {
            current += increment;
            if((id=="count1") || (id=="count4")){
                obj.textContent = current;
            }
            else{
                obj.textContent = formatNumber(current);
            }
            if (current == end) {
              clearInterval(timer);
            }
          }, step/100);
        }
      }
    counter("count1", 0, 1200, 20);
    counter("count2", 0, 10000, 20);
    counter("count3", 0, 10000, 20);
    counter("count4", 0, 5045, 50);
    // Cho chạy level khi cuộn tới
        // var divWidth = 0;
        // var intervalId = setInterval(function() {
        //   if (divWidth >= 90) {
        //     // clearInterval(intervalId);
        //   } else {
        //     divWidth++;
        //     $('#level1').css('width', divWidth + '%');
        //     $('#label1').text(divWidth + '%');
        //   }
        //   if (divWidth >= 97) {
        //     clearInterval(intervalId);
        //   } else {
        //     divWidth++;
        //     $('#level2').css('width', divWidth + '%');
        //     $('#label2').text(divWidth + '%');
        //   }
        //   if (divWidth >= 85) {
        //     // clearInterval(intervalId);
        //   } else {
        //     divWidth++;
        //     $('#level3').css('width', divWidth + '%');
        //     $('#label3').text(divWidth + '%');
        //   }
        // }, 100); 
    //
    var animationStarted = false;

    $(window).scroll(function() {
      if (!animationStarted && isScrolledIntoView($('#international'))) {
        animationStarted = true;
        var divWidth = 0;
        var intervalId = setInterval(function() {
          if (divWidth >= 90) {
            // clearInterval(intervalId);
          } else {
            divWidth++;
            $('#level1').css('width', divWidth + '%');
            $('#label1').text(divWidth + '%');
          }
          if (divWidth >= 97) {
            clearInterval(intervalId);
          } else {
            divWidth++;
            $('#level2').css('width', divWidth + '%');
            $('#label2').text(divWidth + '%');
          }
          if (divWidth >= 85) {
            // clearInterval(intervalId);
          } else {
            divWidth++;
            $('#level3').css('width', divWidth + '%');
            $('#label3').text(divWidth + '%');
          }
        }, 100); 

        $(window).off('scroll');
      }
    });

    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = elem.offset().top;
      var elemBottom = elemTop + elem.height();
      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    // fag
    $("#fag-item-about").hide();
    $("#plus").show();
    $("#minus").hide();
    $("#fag-item-about1").hide();
    $("#plus1").show();
    $("#minus1").hide();
    $("#fag-item-about2").hide();
    $("#plus2").show();
    $("#minus2").hide();
    $("#fag-item-about3").hide();
    $("#plus3").show();
    $("#minus3").hide();
    // Hiển thị hoặc ẩn phần tử khi bấm vào button
    $("#btn_submit").on("click", function() {
      $("#fag-item-about").toggle();
      $("#minus").toggle();
      $("#plus").toggle();
    });
    $("#btn_submit1").on("click", function() {
      $("#fag-item-about1").toggle();
      $("#minus1").toggle();
      $("#plus1").toggle();
    });
    $("#btn_submit2").on("click", function() {
      $("#fag-item-about2").toggle();
      $("#minus2").toggle();
      $("#plus2").toggle();
    });
    $("#btn_submit3").on("click", function() {
      $("#fag-item-about3").toggle();
      $("#minus3").toggle();
      $("#plus3").toggle();
    });
    //nav-moblie 
    $("#nav-res").on("click", function() {
      $("#nav-mobile").addClass("show");
      $("#layer_mobile").addClass('show');
    });
    
    $("#quit").on("click", function() {
      $("#nav-mobile").removeClass('show');
      $("#layer_mobile").removeClass('show');
    });
    
    $("#layer_mobile").on("click", function() {
      $("#nav-mobile").removeClass('show');
      $("#layer_mobile").removeClass('show');
    });
    //search
    $('#nav_search').on('click', function() {
      $('#search').addClass('active');
    });
    $('#search').on('click', function() {
        $("#search").removeClass('active');
    });
    $('#nav_search').on('click', function() {
      $('#search-child').addClass('active-child');
    });
    $('#search').on('click', function() {
        $("#search-child").removeClass('active-child');
    });
    //trailer
    $('#btn_trailer').on('click', function() {
      $('#trailer').addClass('active-trailer');
    });
    $('#trailer').on('click', function() {
        $("#trailer").removeClass('active-trailer');
    });
    $('#btn_trailer').on('click', function() {
      $('#trailer-child').addClass('active-trailer-child');
    });
    $('#trailer').on('click', function() {
        $("#trailer-child").removeClass('active-trailer-child');
    });
    $(document).mouseup(function(e) {
      var container = $("#video-trailer");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $("#video-trailer")[0].pause();
      }
    });
});
