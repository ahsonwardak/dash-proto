var pathname = window.location.pathname;
var path = pathname.substr(pathname.lastIndexOf('/'), pathname.length);

switch (path) {
  case '/dashboard-overview.html':
    require('./charts/dashboard-overview-sessions');
    require('./charts/dashboard-overview-pie');
  break;

  case '/project-health.html':
    require('./components/timeline');
    require('./charts/project-health-roadmap-pie');
    require('./charts/project-health-release-pie');
    require('./charts/project-health-feature-pie');

    setTimeout(function(){
      require('./components/sidebar');
    }, 150);
  break;

  case '/analytics-sessions.html':
    require('./charts/analytics-sessions');
    require('./components/analytics-sessions-tabs');
  break;

  case '/analytics-email.html':
    require('./components/analytics-email');
  break;

  case '/analytics-goals.html':
    require('./components/analytics-goals');
  break;

  case '/systems.html':
    require('./charts/systems');
  break;
};
