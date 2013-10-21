$(function(){
  var
  winCount = 3,
  autoMoveTime = 2000,
  moveAnimateDue = 350,
  exploidDelay = 50,
  hoverWait = 400,
  sw = window.innerWidth,
  sh = window.innerHeight,
  $start = $('#start'),
  $win = $('#win'),
  $loose = $('#loose'),
  $btns = $('.btns .btn'),
  $selected = false,
  hoverMoveTimerId=0,
  autoMoveIv=0,
  colors = ['#16A085', '#2ECC71', '#2980B9', '#9B59B6', '#2C3E50',
            '#F39C12', '#D35400', '#E74C3C', '#973449', '#FF385D',
            '#C0392B', '#7F8C8D', '#D35400', '#973449', '#9DC500'],
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
    }, moveAnimateDue, 'ease-out');
  },
  randAutoMove = function(){
    autoMoveIv = setInterval(function(){
      randMove($btns.eq(rnd(0,$btns.length-1)));
    },autoMoveTime);
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
      delay+=exploidDelay;
    }
  },
  choose1 = function(){
    var $this = $(this);
    $this.addClass('active');
    hoverMoveTimerId && clearTimeout(hoverMoveTimerId);
    if(!$selected){
      $selected = $this;
    }else{
      if($this.html()==$selected.html()){
        $selected.removeClass('active'); // cancel
        randMove($selected);
      }else if($this.data('match')==$selected.data('match')){
        $this.addClass('remove');
        $selected.addClass('remove');
        --winCount || win();
      }else{
        end();
      }
      $selected = false;
    }
  },
  hover = function(){
    var $this = $(this);
    if(!$this.hasClass('active'))
      hoverMoveTimerId = setTimeout(randMove, hoverWait, $this);
  },
  reset = function(){
    window.location.reload(); // cheap as posible !
  },
  end = function(){
    $loose.removeClass('remove');
    $btns.addClass('remove');
  },
  win = function(){
    $win.removeClass('remove');
    $btns.addClass('remove');
  },
  start = function(){
    exploid();
    randAutoMove();

    $start.addClass('remove');
    $btns.mouseover(hover);
    $btns.click(choose1);
    $loose.click(reset);
    $win.click(reset);
  },
  init = function(){
    $start.click(start);
    setColors();
  };

  init();

});