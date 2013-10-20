$(function(){
  var
  $btns = $('.btn'),
  colors = ['#123','#234','...'],
  selected = null,
  rnd = function(min,max){
    return  Math.floor(math.random()*(max-min+1)+min);
  },
  setColors = function(){

  },
  exploid = function(){

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