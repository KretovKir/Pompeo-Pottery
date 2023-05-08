(function(){
  let myMap;

const init = () => {
  myMap = new ymaps.Map("map-block", {
    center: [54.509805, 36.274478],
    zoom: 16.92,
    controls: [],
    
  });

  const coords = [
    [54.509525, 36.273786],
  ];

  const myCollection = new ymaps.GeoObjectCollection(
    {},
    {
      type: "Point",
      draggable: false,
      iconLayout: "default#image",
      iconImageSize: [30, 38],
      
    //   iconImageOffset: [-3, -42],
    }
  );

  for (var i = 0; i < coords.length; i++) {
    myCollection.add(new ymaps.Placemark(coords[i]));
  }

  myMap.geoObjects.add(myCollection);
  myMap.behaviors.disable('scrollZoom');
};

ymaps.ready(init);

})();