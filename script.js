$(function(){
  var
  $start = $('#start'),
  $btns = $('.btns .btn'),
  colors = ['#1ABC9C','#2ECC71','#3498DB','#34495E','#9B59B6','#F1C40F','#E67E22','#E74C3C','#7F8C8D','#2980B9','#95A5A6','#C0392B','#D35400','#F39C12','#666'],
  selected = null,
  rnd = function(min,max){
    return  Math.floor(Math.random()*(max-min+1)+min);
  },
  randColor = function(){
    return colors[rnd(0,colors.length-1)];
  },
  setColors = function(){
    $btns.each(function(){
      $(this).css({
        'background-color': randColor()
      });
    });
  },
  exploid = function(){
    $btns.each(function(){
      $(this).animate({
        left : rnd(0,90) + '%',
        top : rnd(0,90) + '%'
      },400);
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