var $ = require('jquery');

var $timeline = $('.timeline');
var $years = $timeline.find('.release-year');

$years.on('click', function(){
  $(this).addClass('-active').siblings().removeClass('-active');
});
