var app = $.spapp({
  defaultView: "#view_home",
  templateDir: "./tpl/",
  pageNotFound: "error_404",
});

app.route({
  view: "view_home",
  load: "home.html",
});

app.route({
  view: "view_about",
  load: "about.html",
});

app.route({
  view: "view_contact",
  load: "contact.html",
});

app.run();
