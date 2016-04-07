var c3 = require('c3');
var $  = require('jquery');

var $links = $('.feature-toolbar-tabs a');

// CPU Usage
var getRegions = function() {
  var regions = [];
  var current = 0;

  while (current < 12) {
    regions.push({
      axis: 'x',
      start: current - 0.5,
      end: current + 0.5,
      class: 'r' + current
    });

    current += 1;
  }

  return regions;
};

var CPUUsage = c3.generate({
  bindto: '#systems-cpu-usage-chart',
  padding: {
    left: 45
  },
  legend: {
    show: false
  },
  size: {
    height: 360
  },
  grid: {
    y: {
      ticks: true
    }
  },
  point: {
    show: false
  },
  data: {
    columns: [
      ['normal', 5, 8, 6, 10, 7, null, null, null, null, 15, 5, 11, 3],
      ['warning', null, null, null, null, 7, 7, 88, null, 97, 15],
      ['critical', null, null, null, null, null, null, 88, 97, 97 ]
    ],
    colors: {
      'normal': '#1f77b4',
      'warning': '#e59d02',
      'critical': '#e53838'
    }
  },
  axis: {
    x: {
      type: 'category',
      categories: [
        null, '6/8', '6/15', '6/22', '6/29', '7/06', '7/13', '7/20', '7/27', '8/3', '8/10', '8/17'
      ]
    }
  },
  tooltip: {
    contents: require('./tooltips/cpu-usage')
  },
  regions: getRegions()
});

CPUUsage.axis.min({x: 7});
CPUUsage.axis.max({x: 11});

$links.on('click', function(e){
  e.preventDefault();

  var $el = $(this);
  var min = $el.data('min');

  $el.parent().addClass('-active').siblings().removeClass('-active');

  CPUUsage.axis.min({x: min});
});


// Commits Graph

var CommitsGraph = c3.generate({
  bindto: '#systems-commits-chart',
  tooltip: {
    contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
      var $$ = this, config = $$.config,
          titleFormat = config.tooltip_format_title || defaultTitleFormat,
          nameFormat = config.tooltip_format_name || function (name) { return name; },
          valueFormat = config.tooltip_format_value || defaultValueFormat,
          text, i, title, value, name;
      for (i = 0; i < d.length; i++) {
        if (! (d[i] && (d[i].value || d[i].value === 0))) { continue; }

        if (! text) {
          title = titleFormat ? titleFormat(d[i].x) : d[i].x;
          text = '<div class="new-tooltip-wrapper -commits">';
          text += '<h3>Week of ' + title + '</h3>';
          text += "<ul class='new-tooltip'>";
        }

        name  = nameFormat(d[i].name);
        value = valueFormat(d[i].value, d[i].ratio, d[i].id, d[i].index);

        text += "<li class='" + $$.CLASS.tooltipName + "-" + d[i].id + " -item-"+i+"'>";
        text += "<div class='new-tooltip-name'>" + name + "</div>";
        text += "<div class='new-tooltip-value'>" + value + "</div>";
        text += "</li>";
      }

      return text + "</ul></div>";
    }
  },
  size: {
    height: 220
  },
  padding: {
    left: 22
  },
  grid: {
    y: {
      ticks: true
    }
  },
  point: {
    show: false
  },
  data: {
    columns: [
      ['commits', 50, 65, 50, 68, 80, 60, 62, 68]
    ],
    colors: {
      'commits': '#1f77b4'
    }
  },
  legend: {
    show: false
  },
  axis: {
    x: {
      type: 'category',
      categories: [
        null, '6/8', '6/15', '6/22', '6/29', '7/06', '7/13', '7/20', '7/27'
      ]
    }
  },
  regions: getRegions()
});

CommitsGraph.axis.min({x: 1});
CommitsGraph.axis.max({x: 6});
