function openRundenuebersicht() {
  var rundenuebersichtView = new steroids.views.WebView("html/rundenuebersicht.html");
  steroids.layers.push(rundenuebersichtView);
}

function openNeuesSpielScreen() {
  var neuesSpielView = new steroids.views.WebView("html/neuesSpiel.html");
  steroids.layers.push(neuesSpielView);
}

function openHomeScreen() {
  var HomeScreen = new steroids.views.WebView("html/home.html");
  steroids.layers.push(neuesSpielView);
}