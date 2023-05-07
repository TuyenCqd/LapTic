$(document).ready(function() {
  $("#preload").fadeIn(500); // hiển thị div trong 0.5 giây
  $(window).scrollTop(0); // di chuyển đến đầu trang
});

$(window).on("load", function() {
  $("#preload").fadeOut(500); // ẩn div trong 0.5 giây khi trang đã tải xong
});


$(document).ready(function() {
  // Ẩn button ban đầu
  $('#arrow').hide();

  // Hiển thị hoặc ẩn button khi lướt trang
  $(window).scroll(function() {
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
});
$(document).ready(function(){
    //loading
    // $('#preload').show();
    // setTimeout(function() {
    //     // Ẩn div sau 5 giây
    //     $('#preload').hide();
    // }, 5000);
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
    counter("count1", 0, 1200, 50);
    counter("count2", 0, 10000, 20);
    counter("count3", 0, 10000, 20);
    counter("count4", 0, 5045, 20);

    //
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
      $("#nav-mobile").addClass('show');
      $("#layer_mobile").addClass('show');
    });
    
    $("#quit").on("click", function() {
      $("#nav-mobile").removeClass('show');
      $("#layer_mobile").removeClass('show');
    });
    
});