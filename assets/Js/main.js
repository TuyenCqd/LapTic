
$(function(){
  //to-top
    $(window).scroll(function() {
      console.log("hi");
      $("#to_top").hide();
      var to_top = $("#to_top");
      if ($(window).scrollTop() > 100) {
        console.log("hi1");
        $("#to_top").show();
      } else {
        console.log("hi2");
        to_top.hide();
      }
    });
    //loading
    $('#preload').show();
    setTimeout(function() {
        // Ẩn div sau 5 giây
        $('#preload').hide();
    }, 5000);
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
});