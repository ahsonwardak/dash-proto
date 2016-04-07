var c3 = require('c3');

// Feature Graph
var getRegions = function() {
  var regions = [];
  var current = 0;

  while (current < 13) {
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

var FeatureGraph = c3.generate({
  bindto: '#analytics-overview-feature-graph',
  size: {
    height: 350
  },
  grid: {
    y: {
      ticks: true
    }
  },
  tooltip: {
    contents: require('./tooltips/feature-graph')
  },
  data: {
    columns: [
      ['total', 12.5, 14.23, 15.023, 16.013, 17.847, 24.013, 38.31, 55.008, 68.013, 76.233, 81.665, 82.031, 80.832, 76.948],
      ['new', 2.01, 2.03, 2.32, 2.74, 4.1, 5.13, 7.12, 10.32, 19.003, 23.231, 25.833, 28.356, 26.995, 28.055]
    ],
    colors: {
      'total': '#1f77b4',
      'new'  : '#0095ce'
    },
    types: {
      'total': 'area-spline',
      'new': 'area-spline'
    },
  },
  legend: {
    show: false
  },
  axis: {
    x: {
      type: 'category',
      categories: [
        null, '6/1', '6/8', '6/15', '6/22', '6/29', '7/06', '7/13', '7/20', '7/27', '8/3', '8/10', '8/17'
      ]
    }
  },
  regions: getRegions()
});

FeatureGraph.axis.min({x: 1});
FeatureGraph.axis.max({x: 11, y: 95});
