;(function($){
  const aboutMe = {
    init: function(){
      this.section1();
      this.section2();
      this.section3();
      this.section5();
    },
    section1:function(){
      // $.ajax({
      //   url:"../data-json/about.json",
      //   dataType:"JSON",
      //   success: function(res){
      //     let txt = '';
      //     $.each(res.about, function(idx, item){
      //       console.log(idx);
      //     });
      //   },
      //   error: function(){
      //     console.log("에러");
      //   }
      // })

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
        // console.log(높이);

        /*
        a = 650
        b = 1150

        x = -1/500   -0.002
        y = 115/50   2.3

        ax + y = 1
        bx + y = 0

        x = 1/(a-b)
        y = 1-(a/(a-b))

        1/(650-1150)
        1-(650/(650-1150))

        4539 4897
        */

        // console.log((높이 - $('#section2').offset().top));

        function 계산식(a,b){
          x = 1/(a-b) // 기울기
          y = 1-(a/(a-b)) // 절편
          return x * 높이 + y;
        }

        // console.log( $('#section2').offset().top );

        // console.log( $('html').width() );

        if( $('html').width() > 1400 ){
          var cardY1 =  계산식( $('#section2').offset().top + 200, $('#section2').offset().top + 611 );
          var cardY2 =  계산식( $('#section2').offset().top + 844, $('#section2').offset().top + 1228 );
          var cardY3 =  계산식( $('#section2').offset().top + 1483, $('#section2').offset().top + 1872 );
          var cardY4 =  계산식( $('#section2').offset().top + 2126, $('#section2').offset().top + 2516 );
        }
        else if( $('html').width() > 900 && $('html').width() <= 1400 ){
          // 최대 1 , 최소 0 //  927 717
          var cardY1 =  계산식( $('#section2').offset().top + 233, $('#section2').offset().top + 422 );
          var cardY2 =  계산식( $('#section2').offset().top + 755, $('#section2').offset().top + 1039 );
          var cardY3 =  계산식( $('#section2').offset().top + 1250, $('#section2').offset().top + 1504 );
          var cardY4 =  계산식( $('#section2').offset().top + 1753, $('#section2').offset().top + 2000 );
        }

        if(cardY1 > 1){
          cardY1 = 1;
        }
        else if (cardY1 < 0){
          cardY1 = 0;
        }
        if(cardY2 > 1){
          cardY2 = 1;
        }
        else if (cardY2 < 0){
          cardY2 = 0;
        }
        if(cardY3 > 1){
          cardY3 = 1;
        }
        else if (cardY3 < 0){
          cardY3 = 0;
        }
        if(cardY4 > 1){
          cardY4 = 1;
        }
        else if (cardY4 < 0){
          cardY4 = 0;
        }


        let sang = ""; // test

        if( sang == 'test'){
          $('.card-box').eq(0).css('opacity', 1);
          $('.card-box').eq(0).css('transform', `scale(1)`);

          $('.card-box').eq(1).css('opacity', 1);
          $('.card-box').eq(1).css('transform', `scale(1)`);

          $('.card-box').eq(2).css('opacity', 1);
          $('.card-box').eq(2).css('transform', `scale(1)`);

          $('.card-box').eq(3).css('opacity', 1);
          $('.card-box').eq(3).css('transform', `scale(1)`);
        }
        else {
          $('.card-box').eq(0).css('opacity', cardY1);
          $('.card-box').eq(0).css('transform', `scale(${cardY1})`);

          $('.card-box').eq(1).css('opacity', cardY2);
          $('.card-box').eq(1).css('transform', `scale(${cardY2})`);

          $('.card-box').eq(2).css('opacity', cardY3);
          $('.card-box').eq(2).css('transform', `scale(${cardY3})`);

          $('.card-box').eq(3).css('opacity', cardY4);
          $('.card-box').eq(3).css('transform', `scale(${cardY4})`);
        }
      })
    },
    section3:function(){
      const options = { threshold: 0.4 };
      let observer = new IntersectionObserver((e)=>{
        e.forEach((item)=>{
          if(item.isIntersecting){ // 박스가 보일때
            document.querySelectorAll('#main')[0].style.background = '#fff';
            document.querySelectorAll('.text')[0].style.background = '#fff';
            document.querySelectorAll('.text')[1].style.background = '#fff';
            document.querySelectorAll('.text')[2].style.background = '#fff';
            document.querySelectorAll('.text')[3].style.background = '#fff';
            document.querySelectorAll('.text')[4].style.background = '#fff';
          }
          else {
            document.querySelectorAll('#main')[0].style.background = 'rgb(13, 17, 22)';
            document.querySelectorAll('.text')[0].style.background = 'rgb(13, 17, 22)';
            document.querySelectorAll('.text')[1].style.background = 'rgb(13, 17, 22)';
            document.querySelectorAll('.text')[2].style.background = 'rgb(13, 17, 22)';
            document.querySelectorAll('.text')[3].style.background = 'rgb(13, 17, 22)';
            document.querySelectorAll('.text')[4].style.background = 'rgb(13, 17, 22)';
          }
        });
      }, options)

      let sec = document.querySelectorAll('#section3 .imac');

      observer.observe(sec[0]);

      // console.log( observer.observe() );

      // console.log( document.querySelectorAll('#section3') );


      $(window).scroll(function(){
        var 높이 = $(window).scrollTop();
        // console.log( $('#section3').scrollTop() );

        function 계산식(a,b){
          x = 1/(a-b) // 기울기
          y = 1-(a/(a-b)) // 절편
          return x * 높이 + y;
        }


        let port1_opacity = 계산식( $('#section3 .con').offset().top + 300,  $('#section3 .con').offset().top + 600 );
        let port2_opacity = 계산식( $('#section3 .con').offset().top + 900,  $('#section3 .con').offset().top + 1200 );
        let port3_opacity = 계산식( $('#section3 .con').offset().top + 1500, $('#section3 .con').offset().top + 1800 );
        let port4_opacity = 계산식( $('#section3 .con').offset().top + 2100, $('#section3 .con').offset().top + 2400 );

        // let port1_opacity = 계산식( $('#section3 .con').offset().top + 233,  $('#section3 .con').offset().top + 422 );
        // let port2_opacity = 계산식( $('#section3 .con').offset().top + 844,  $('#section3 .con').offset().top + 1228 );
        // let port3_opacity = 계산식( $('#section3 .con').offset().top + 1483, $('#section3 .con').offset().top + 1872 );
        // let port4_opacity = 계산식( $('#section3 .con').offset().top + 2126, $('#section3 .con').offset().top + 2516 );

        // let port2_opacity = 계산식( $('#section3').offset().top + 233, $('#section3').offset().top + 422 );
        // console.log(port1_opacity);

        $(".port1").css('opacity',`${port1_opacity}`);
        $(".port2").css('opacity',`${port2_opacity}`);
        $(".port3").css('opacity',`${port3_opacity}`);
        $(".port4").css('opacity',`${port4_opacity}`);

        $(".text1").css('opacity',`${port1_opacity}`);
        $(".text2").css('opacity',`${port2_opacity}`);
        $(".text3").css('opacity',`${port3_opacity}`);
        $(".text4").css('opacity',`${port4_opacity}`);

      })
    },
    section5:function(){
      $(window).scroll(function(){
        var 높이 = $(window).scrollTop();
        // console.log(높이);

        function 계산식(a,b){
          x = 1/(a-b) // 기울기
          y = 1-(a/(a-b)) // 절편
          return x * 높이 + y;
        }

        // 1 -> 0.8

        // $('.sec5-img').css('transforom','scale(0.5)')

        let port1_scale = 계산식( $('.title-box_t').offset().top + 1700,  $('.title-box_t').offset().top + 3500 );

        if( port1_scale < 0.6 ) {
          port1_scale = 0.6;
        }
        else if ( port1_scale > 1) {
          port1_scale = 1
        }

        $('.sec5-img').css('transform',`scale(${port1_scale})`);

        });
    }
  }
  aboutMe.init();

})(jQuery);