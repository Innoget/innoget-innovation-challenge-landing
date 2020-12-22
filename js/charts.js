/*GEOCHART*/

google.charts.load("current", {
  packages: ["geochart"],
  mapsApiKey: "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY",
});
google.charts.setOnLoadCallback(drawRegionsMap);
function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ["Region code", "Continent", "Region of origin (%)"],
    ["150", "Europe", 44],
    ["019", "Americas", 32],
    ["142", "Asia", 22],
    ["009", "Oceania", 22],
    ["002", "Africa", 2],
  ]);
  var options = {
    region: "world",
    resolution: "continents",
    legend: "none",
    colorAxis: {
      minValue: 0,
      colors: ["#B6CCE7", "#1D7CEE"],
    },
  };
  var chart = new google.visualization.GeoChart(
    document.getElementById("regions_div")
  );
  chart.draw(data, options);
}

/*END GEOCHART*/
/*DONUT CHART*/
google.charts.load("current", { packages: ["corechart", "bar"] });
google.charts.setOnLoadCallback(drawStacked);

function drawStacked() {
  var data = google.visualization.arrayToDataTable([
    ["Account type", "%"],
    ["SMEs, Startups and Spinoffs", 36.3],
    ["Scientists and Experts", 22.0],
    ["Research and Technology Organizations", 17.6],
    ["Innovation Intermediaries", 9.9],
    ["Large Enterprises", 8.8],
    ["Other organizations", 5.6],
  ]);

  var options = {
    title: "Network distribution by account type",
    height: 720,
    fontName: "Raleway",
    fontSize: "13",
    colors: ["#CEDBE7"],
    chartArea: { width: "50%" },
    isStacked: true,
    hAxis: {
      minValue: 0,
    },
    vAxis: {
      title: "Account Type",
    },
  };
  var chart = new google.visualization.BarChart(
    document.getElementById("donutchart_div")
  );
  chart.draw(data, options);
}

google.charts.load("current", { packages: ["corechart", "bar"] });
google.charts.setOnLoadCallback(drawStacked2);

function drawStacked2() {
  var data = google.visualization.arrayToDataTable([
    ["Research areas", "%"],
    ["Industrial Manufacturing and Transport", 11.8],
    ["Industrial Technologies", 11.8],
    ["Biological Sciences", 10.8],
    ["Agro-food Industry", 9.7],
    ["Measurements and Standards", 9.7],
    ["Social and Economic Concerns", 9.7],
    ["Agriculture and Marine Resources", 8.6],
    ["Protecting Man and Environment", 7.5],
    ["Energy", 7.5],
    ["Physical and Exact Sciences", 7.5],
    ["Electronics, IT and Telecoms", 5.4],
  ]);

  var options = {
    title: "Network distribution by research areas",
    height: 720,
    fontName: "Raleway",
    fontSize: "13",
    colors: ["#CEDBE7"],
    chartArea: { width: "50%" },
    isStacked: true,
    hAxis: {
      minValue: 0,
    },
    vAxis: {
      title: "Research Area",
    },
  };
  var chart = new google.visualization.BarChart(
    document.getElementById("donutchart_div2")
  );
  chart.draw(data, options);
}

/*END DONUT CHART*/
