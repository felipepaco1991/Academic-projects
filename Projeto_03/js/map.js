
  


    function initMap() {
      const myLatLng =  { lat: -22.9725842, lng: -43.702245 };
      const map = new google.maps.Map(document.getElementById("map"), {
        
        zoom: 14,
        center: myLatLng
      });

      new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Go on Systems",
    });
    }

    initMap()
  