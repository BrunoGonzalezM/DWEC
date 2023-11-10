var map;
var service;
var infowindow;
const formBusqueda = document.getElementById('form-busqueda');
let infoWindow;




function initMap(){
    var toledo = new google.maps.Lating(39.87109, -4.02268);
    map = new google.maps.Map ( 
        document.getElementById('map'), {center: toledo, zoom:15});
    infowindow = new google.maps.infowindow();
    const marker = new google.maps.Marker({
        position: toledo,
        map: map,
    })
}

function centrarMap(lat, lng){
    const positionsGeo = new google.maps.Lating(lat, lng);
    
}
