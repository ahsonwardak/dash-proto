module.exports = function (d, defaultTitleFormat, defaultValueFormat, color) {
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
};
