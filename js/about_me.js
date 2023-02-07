;(function($){
  const aboutMe = {
    init: function(){
      this.section1();
      this.section2();
    },
    section1:function(){
      $.ajax({
        url:"../data-json/about.json",
        dataType:"JSON",
        success: function(res){
          let txt = '';
          $.each(res.about, function(idx, item){
            console.log(idx);
          });
        },
        error: function(){
          console.log("에러");
        }
      })


      const options = { threshold: 0.4 };
      let observer = new IntersectionObserver((e)=>{
        e.forEach((item)=>{
          if(item.isIntersecting){ // 박스가 보일때
            item.target.style.opacity = 1;
            item.target.style.transform = 'scale(1) rotate(0deg)';
          }
          else {
            item.target.style.opacity = 0;
            // item.target.style.transform = 'rotate(-90deg)';
          }
          // console.log(item.intersectionRatio);
        });
      }, options)

      let ment = document.querySelectorAll('.ment');

      observer.observe(ment[0]);
      observer.observe(ment[1]);
      observer.observe(ment[2]);
      observer.observe(ment[3]);
      observer.observe(ment[4]);
      observer.observe(ment[5]);
    },
    section2:function(){
      $(window).scroll(function(){
        var 높이 = $(window).scrollTop();
        console.log(높이);

        // 최대 1 , 최소 0
        var cardY1 =  -1/400 * 높이 + 17.7;
        var cardY2 =  -1/400 * 높이 + 19.365;
        var cardY3 =  -1/400 * 높이 + 21.0025;
        var cardY4 =  -1/400 * 높이 + 22.6025;

        // 최대 1 , 최소 0.5
        var cardScale1 =  -0.00125 * 높이 + 9.3475;
        var cardScale2 =  -0.00125 * 높이 + 10.1825;
        var cardScale3 =  -0.00125 * 높이 + 11.00125;
        var cardScale4 =  -0.00125 * 높이 + 11.80125;

        if( cardScale1 > 1){
          cardScale1 = 1;
        }
        if( cardScale2 > 1){
          cardScale2 = 1;
        }
        if( cardScale3 > 1){
          cardScale3 = 1;
        }
        if( cardScale4 > 1){
          cardScale4 = 1;
        }

        if( cardScale1 < 0){
          cardScale1 = 0;
        }
        if( cardScale2 < 0){
          cardScale2 = 0;
        }
        if( cardScale3 < 0){
          cardScale3 = 0;
        }
        if( cardScale4 < 0){
          cardScale4 = 0;
        }

        $('.card-box').eq(0).css('opacity', cardY1);
        $('.card-box').eq(0).css('transform', `scale(${cardScale1})`);

        $('.card-box').eq(1).css('opacity', cardY2);
        $('.card-box').eq(1).css('transform', `scale(${cardScale2})`);

        $('.card-box').eq(2).css('opacity', cardY3);
        $('.card-box').eq(2).css('transform', `scale(${cardScale3})`);

        $('.card-box').eq(3).css('opacity', cardY4);
        $('.card-box').eq(3).css('transform', `scale(${cardScale4})`);
      })
    }
  }
  aboutMe.init();
})(jQuery);