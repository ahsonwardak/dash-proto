var $         = require('jquery');
var $tabs     = $('.app-sidebar a.-enabled');
var $panels = $('.goal-panel');

$tabs.on('click', function(e) {
  e.preventDefault();

  var $el     = $(this);
  var $parent = $el.parent();
  var $target = $($el.attr('href'));

  // Hide stuff
  $tabs.parent().removeClass('-active');
  $panels.removeClass('-active');

  // Show stuff
  $parent.addClass('-active');
  $target.addClass('-active');

  return false;
});
