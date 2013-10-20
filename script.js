$(function(){
  var
  $start = $('#start'),
  $btns = $('.btns .btn'),
  colors = ['#16A085','#2ECC71','#2980B9','#9B59B6','#2C3E50','#F39C12','#D35400','#E74C3C','#973449','#FF385D','#C0392B','#7F8C8D','#D35400','#973449','#9DC500'],
  selected = null,
  rnd = function(min, max){
    return  Math.floor(Math.random()*(max-min+1)+min);
  },
  randColor = function(){
    return colors[rnd(0, colors.length-1)];
  },
  setColors = function(){
    $btns.each(function(){
      $(this).css({
        'background-color' : randColor()
      });
    });
  },
  exploid = function(){
    $btns.each(function(){
      $(this).animate({
        left : rnd(0, 90) + '%',
        top : rnd(0, 90) + '%'
      }, 400);
    });
  },
  choose1 = function(){

  },
  start = function(){
    exploid();
    $btns.click(choose1);
  },
  reset = function(){
    window.location.reload(); // cheap as posible !
  },
  init = function(){
    $start.click(start);
    setColors();
  };

  init();

});