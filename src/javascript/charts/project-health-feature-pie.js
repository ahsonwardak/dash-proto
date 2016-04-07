var d3 = require('d3');
var $ = require('jquery');

var width  = 324;
var height = 324;
var offset = 20;
var speed  = 500;
var radius = Math.min(width, height) / 2;

var color = d3.scale.ordinal()
  .range(['#0095ce', '#c7d4d8']);

var arc = d3.svg.arc()
  .outerRadius(radius)
  .innerRadius(radius - 90);

var arc2 = d3.svg.arc()
  .outerRadius(radius)
  .innerRadius(radius + 90);

var pie = d3.layout.pie()
  .sort(null)
  .startAngle(2*Math.PI)
  .endAngle(4*Math.PI)
  .value(function(d) {
    return d.amount;
  });

var data = [
  {label: 'Spent'     , amount: 66000},
  {label: 'Remaining' , amount: 9000}
];

var svg = d3.select('#project-health-feature-pie').append('svg')
  .attr('id', 'chart')
  .attr('width', width + offset)
  .attr('height', height + offset)
  .attr('viewBox', '0 0 ' + width + offset + ''+ width + offset +'')
  .attr('perserveAspectRatio', 'xMinYMid')
  .append('g')
  .attr('transform', 'translate(' + (width+offset) / 2 + ',' + (height + offset) / 2 + ')');

  data.forEach(function(d) {
    d.amount = +d.amount;
  });

  var g = svg.selectAll('.arc')
    .data(pie(data))
    .enter().append('g')
    .attr('class', 'arc');

  g.append('path')
    .style('fill', function(d) {
      return color(d.data.label);
    })
    .transition().delay(function(d, i) {
      return i * speed;
    })
    .duration(speed)
    .attrTween('d', function(d) {
      var i = d3.interpolate(d.startAngle+0.1, d.endAngle);
      return function(t) {
        d.endAngle = i(t);
        return arc(d);
      };
    });
