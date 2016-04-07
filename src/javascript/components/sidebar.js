var $ = require('jquery');

var $subs      = $('.sub-feature-list li');
var $links     = $subs.find('a.-enabled');
var $content   = $('.app-content');
var $sidebar   = $('.app-sidebar');
var $backLinks = $('.feature-header-back');
var $toggler   = $('.timeline .-enabled');

var current = 1;

var timer = setInterval(function(){
  var $el = $subs.find('.-inactive').first();
  if ($el.length) {
    $el.removeClass('-inactive');
  } else {
    clearInterval(timer);
  }
}, 100);

$toggler.on('click', function(e){
  e.preventDefault();

  var $el = $(this);

  $el.addClass('-highlight');

  switch (current) {
    case 1:
      $('.sub-feature-list.-level-1 a.-enabled').trigger('click');
    break;
    case 3:
      $('.feature.-level-3 .feature-header-back').trigger('click');
    break;
    default:
      return false;
  }
});

$links.on('click', function(){
  var $el = $(this);

  if (current >= 2) {
    $el.parent().addClass('-active').siblings().removeClass('-active');
  }

  if (current == 3) return;

  $content.attr('class', 'app-content -show-level-' + (current + 1) + ' -forward');

  if (current == 1) {
    $sidebar.attr('class', 'app-sidebar -show-level-2')
  }


  current += 1;
});

$backLinks.on('click', function(){
  $content.attr('class', 'app-content -show-level-' + (current - 1) + ' -back');

  if (current == 2) {
    $sidebar.attr('class', 'app-sidebar -show-level-1');
  }

  $subs.removeClass('-active');

  current -= 1;
});
