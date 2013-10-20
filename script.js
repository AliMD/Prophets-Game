$(function(){
  var
    $btns = $('.btn'),
    colors = ['#1ABC9C','#2ECC71','#3498DB','#34495E','#9B59B6','#F1C40F','#E67E22','#E74C3C','#7F8C8D','#2980B9','#95A5A6','#C0392B','#D35400','#F39C12','#666'],
    selected = null,
    rnd = function(min,max){
      return  Math.floor(Math.random()*(max-min+1)+min);
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