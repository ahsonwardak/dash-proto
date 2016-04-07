var $     = require('jquery');
var $tabs = $('.tabs-navigation a');

$tabs.on('click', function(e) {
  e.preventDefault();

  var $el     = $(this);
  var $parent = $el.parent();
  var $taget  = $($el.attr('href'));

  $parent.addClass('-active').siblings().removeClass('-active');

  $taget.addClass('-active').siblings().removeClass('-active');

  return false;
});
