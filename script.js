$(function(){
  var
  sw = window.innerWidth,
  sh = window.innerHeight,
  $start = $('#start'),
  $btns = $('.btns .btn'),
  $selected = false,
  winCount = 3,
  iv=0,
  colors = ['#16A085','#2ECC71','#2980B9','#9B59B6','#2C3E50','#F39C12','#D35400','#E74C3C','#973449','#FF385D','#C0392B','#7F8C8D','#D35400','#973449','#9DC500'],
  rnd = function(min, max){
    return  Math.floor(Math.random()*(max-min+1)+min);
  },
  randColor = function(){
    return colors[rnd(0, colors.length-1)];
  },
  randMove = function($btn){
    $btn.animate({
      left : rnd(0, sw-$btn.width()),
      top : rnd(0, sh-$btn.height())
    }, 250);
  },
  setColors = function(){
    $btns.each(function(){
      $(this).css({
        'background-color' : randColor()
      });
    });
  },
  exploid = function(){
    var i,delay = 1;
    for(i=$btns.length-1; i>=0; i--){
      setTimeout(randMove, delay, $btns.eq(i));
      delay+=20;
    }
  },
  choose1 = function(){
    var $this = $(this);
    if(iv) clearTimeout(iv);
    if(!$selected){
      $selected = $this.addClass('active');
    }else{
      if($this.html()!=$selected.html() && $this.data('match')==$selected.data('match')){
        $this.hide();
        $selected.hide();
        --winCount || win();
      }else{
        $selected.removeClass('active');
        end();
      }
      $selected = false;
    }
  },
  hover = function(){
    var $this = $(this);
    if(!$this.hasClass('active'))
      iv = setTimeout(randMove, 300, $this);
  },
  start = function(){
    exploid();
    $btns.click(choose1);
    $btns.mouseover(hover);
    $start.hide();
  },
  reset = function(){
    window.location.reload(); // cheap as posible !
  },
  end = function(){
    alert('loooooooooose !');
    reset();
  },
  win = function(){
    alert('Win !');
    reset();
  },
  init = function(){
    $start.click(start);
    setColors();
  };

  init();

});