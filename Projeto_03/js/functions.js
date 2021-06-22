window.onload = function(){
    var map;
    function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-27.648578,-48.577423),
            scrollwhell: false,
            zoom: 12,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        }
        map = new google.maps.Map(document.getElementById("mapa"),mapProp)
    }
    function addMarker(lat,long,icon, content, click){
        var latLng = {'lat':lat, 'lng':long}
        var marker = new google.maps.Marker({
            position:latLng,
            map: map,
            icon:icon
        })
        var infoWindow = new google.map.InfoWindow({
            content:content,
            maxWidth:200,
            pixelOffset: new google.maps.Size(0,20)
        })

        if(click == true){
        google.maps.event.addListener(marker, 'click', function(){
            
        });
        }else{
            infoWindow.open(map, marker)
        }
        
    }
    
    initialize();
    var conteudo = '<p style="color:black;">Meu endereço</p>'
    addMarker(-27.616637,-48.5923228,'',conteudo, true)

   // map.panTo({'lat':-22.9679803, 'lng':-43.6940872}) Parece que não esta funcionando
  /* setTimeout(function(){
    map.panTo({'lat':-22.9679803, 'lng':-43.6940872})
   },2000) */

   
   
}