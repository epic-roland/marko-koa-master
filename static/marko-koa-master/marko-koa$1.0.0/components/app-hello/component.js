$_mod.def("/marko-koa$1.0.0/components/app-hello/component", function(require, exports, module, __filename, __dirname) { "use strict";

require('/core-js$3.23.1/modules/es.array.map'/*"core-js/modules/es.array.map.js"*/);

require('/core-js$3.23.1/modules/es.array.concat'/*"core-js/modules/es.array.concat.js"*/);

var DG;
var map;
module.exports = {
  onCreate: function onCreate() {
    this.state = {
      lat2gis: 0,
      lng2gis: 0,
      buildingName: "",
      gisAddress: "",
      buildingInfo: "",
      showMap: false,
      cords_map: false
    };
  },
  generateMap: function generateMap() {
    var lat2 = this.state.lat2gis;
    var lng2 = this.state.lng2gis;
    var buildingName = this.state.buildingName;
    var gisAddress = this.state.gisAddress;
    var buildingInfo = this.state.buildingInfo;

    if (map) {
      map.remove(); // should remove the map from UI and clean the inner children of DOM element
    }

    map = DG.map("map", {
      center: [35.170053, 33.377142],
      zoom: 20
    });
    var marker = DG.marker([lat2, lng2], {
      draggable: true
    }).addTo(map);
    marker.on("dragend", function (e) {
      if (this.state.showMap) {
        this.setState({
          cords_map: true,
          lat2gis: e.target._latlng.lat,
          lng2gis: e.target._latlng.lng
        });
      }
    });
    document.getElementById("mapBlock").style.display = "block";

    if (this.state.buildingName != "") {
      marker.bindPopup("Building Name: ".concat(buildingName, " ").concat(buildingInfo, "<br>Address: ").concat(gisAddress));
    }
  },
  onMount: function onMount() {
    DG = require('/2gis-maps$3.7.1/dist/js/script.full'/*"2gis-maps"*/);
    console.log("Mounted in the browser!");
    console.log(map);
  }
};
});