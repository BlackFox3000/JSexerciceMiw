function map(code) {
   // alert(code);
    let coordinate = code.split(':'),
        ville = coordinate[0],
        x = coordinate[1],
        y = coordinate[2],
        z = 5;


//------Map
    //modification de carte
    mymap.setView([x, y], z);
    let marker = L.marker([x, y]).addTo(mymap);
    marker.bindPopup(ville).openPopup();
}