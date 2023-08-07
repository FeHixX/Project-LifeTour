import {map as createMap, tileLayer as createTitleLayers, icon as createIcon, marker as createMarker} from '../../vendor/leaflet';

const addContactsMap = () => {
  if (document.querySelector('#map')) {
    document.querySelector('#map').querySelector('picture').remove();

    const coordinate = [55.774888415546656, 37.632586886490785];
    const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const markerText = `
<p>г. Москва, пр-т Мира, д. 14, офис 101</p>
<p>Номер телефона: <a href="tel:89837454545">8 983 745 45 45</a></p>
`;

    const map = createMap('map', {
      center: coordinate,
      zoom: 16,
      scrollWheelZoom: false,
    });

    const icon = createIcon({
      iconUrl: './img/svg/map-marker.svg',
      iconSize: [48, 48],
    });

    createTitleLayers(url).addTo(map);
    createMarker(coordinate, {icon}).bindPopup(markerText).addTo(map);
  }
};

export {addContactsMap};
