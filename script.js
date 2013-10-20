$(function(){
  var
    $btns = $('.btn'),
    colors = ['#16A085','#2ECC71','#2980B9','#9B59B6','#2C3E50','#F39C12','#D35400','#E74C3C','#973449','#FF385D','#C0392B','#7F8C8D','#D35400','#973449','#9DC500'],
    selected = null,
    rnd = function(min,max){
      return  Math.floor(Math.random()*(max-min+1)+min);
    },
    setColors = function(){
      $btns.each(function(){
        $(this).css({
          'background-color': colors[rnd(0,14)]
        });
      });
    },
    exploid = function(){
      $btns.each(function(){
        $(this).css({
          left : rnd(0,90) + '%',
          top : rnd(0,90) + '%'
        });
      });
    },
    choose1 = function(){

    },
    setEvents = function(){
      $btns.click(choose1);
    },
    init = function(){
      setColors();
      exploid();
      setEvents();
    };

  init();
});