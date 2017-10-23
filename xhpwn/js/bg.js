$(function(){

          $('#midground').css({backgroundPosition: '0px 0px'});
          $('#foreground').css({backgroundPosition: '0px 0px'});
          $('#background').css({backgroundPosition: '0px 0px'});

            $('#midground').animate({
                backgroundPosition:"(0px 20000px)"
            }, 240000, 'linear');

            $('#foreground').animate({
                backgroundPosition:"(0px 20000px)"
            }, 120000, 'linear');

            $('#background').animate({
                backgroundPosition:"(0px 20000px)"
            }, 480000, 'linear');

        });
