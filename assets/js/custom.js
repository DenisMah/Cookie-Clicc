$(document).ready(function () {
  var app = $.spapp({
    defaultView: "#view_home",
    templateDir: "../tpl/",
    pageNotFound: "error_404",
  });

  app.route({
    view: "view_home",
    load: "indexxx.html",
  });

  app.route({
    view: "view_aboutus",
    load: "aboutus.html",
  });

  app.route({
    view: "view_cookies",
    load: "cookies.html",
  });

  app.route({
    view: "view_getinvolved",
    load: "getinvolved.html",
  });

  app.run();
});
