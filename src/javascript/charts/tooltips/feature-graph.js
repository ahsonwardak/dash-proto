var commaNumber = require('../../vendor/comma-number');

module.exports = function(d, defaultTitleFormat, defaultValueFormat, color) {
      var $$ = this, config = $$.config,
          titleFormat = config.tooltip_format_title || defaultTitleFormat,
          nameFormat = config.tooltip_format_name || function (name) { return name; },
          valueFormat = config.tooltip_format_value || defaultValueFormat,
          text, i, title, value, name;
      var totalSessions = 0;
      var percentNew = 0;
      var percentReturning = 0;

      for (i = 0; i < d.length; i++) {
        if (! (d[i] && (d[i].value || d[i].value === 0))) { continue; }

        name  = nameFormat(d[i].name);
        value = valueFormat(d[i].value, d[i].ratio, d[i].id, d[i].index);

        if (! title) title = titleFormat ? titleFormat(d[i].x) : d[i].x;
        if (totalSessions == 0) totalSessions = value;

        if (name == 'new') {
          percentNew = Math.round((value / totalSessions)*100);
          percentReturning = Math.round(((totalSessions - value) / totalSessions)*100);
        }
      }

      return '<div class="new-tooltip-wrapper -sessions">'+
        '<h3><em>3.2</em> Week of '+title+'</h3>'+
        '<div class="new-tooltip-content">'+
          '<h4 class="new-tooltip-name">Sessions</h4>'+
          '<ul>'+
          '<li><span class="new-tooltip-value">'+commaNumber(totalSessions*1000)+'</span></li>'+
          '<li>'+
            '<ul>'+
              '<li><strong>'+percentNew+'%</strong> New</li>'+
              '<li><strong>'+percentReturning+'%</strong> Returning</li>'+
            '</ul>'+
          '</li>'+
          '</ul>'+
        '</div>'+
      '</div>';
    };
