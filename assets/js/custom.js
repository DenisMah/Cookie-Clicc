$(document).ready(function () {
  var app = $.spapp({
    defaultView: "#view_home",
    templateDir: "../tpl/",
    pageNotFound: "error_404",
  });

  app.route({
    view: "view_home",
    load: "index1.html",
    onCreate: function () {
      $("purchase-menu").hide();
    },
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

  app.route({
    view: "view_product",
    load: "product.html",
  });

  app.run();
});
