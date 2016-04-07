var c3 = require('c3');

var DashboardSessionsGraph = c3.generate({
  bindto: '#dashboard-sessions-graph',
  size: {
    height: 170
  },
  tooltip: {
    contents: require('./tooltips/dashboard-sessions')
  },
  point: {
    show: false
  },
  type: 'area-spline',
  data: {
    columns: [
      ['sessions', 4.131, 6.556, 12.03, 10.519, 15.31, 14.199]
    ],
    colors: {
      'sessions': '#0095ce'
    },
    type: 'area-spline'
  },
  legend: {
    show: false
  },
  axis: {
    x: {
      type: 'category',
      categories: [
        null, '7/20', '7/27', '8/03', '8/10', null
      ]
    }
  }
});

DashboardSessionsGraph.axis.min({x: 1, y: 0});
DashboardSessionsGraph.axis.max({x: 4});
