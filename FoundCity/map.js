function map(code) {
    marker.remove();
   // alert(code);
    let coordinate = code.split(':'),
        ville = coordinate[0],
        x = coordinate[1],
        y = coordinate[2],
        z = 5;


//------Map
    //modification de carte
    mymap.setView([x, y], z);
    marker = L.marker([x, y]).addTo(mymap);
    marker.bindPopup(ville).openPopup();
}

function initialiseMap() {
    let
        x = 0,
        y = 0,
        z = 1;
    //initialisation de carte
    mymap = L.map('mapid').setView([x, y], z);
    marker = L.marker([x, y]);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiYmxhY2tmb3gzMDAwIiwiYSI6ImNrMjM5eXd5OTFyNmMzbm12a2pscnhxMW0ifQ.2wfUEW5QjTCHWLzDwIiluQ'
    }).addTo(mymap);
}