import {useEffect, useRef} from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {City, Offer} from '../../types/offer';

const defaultCustomIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

type MapProps = {
  offers: Offer[];
  city: City;
};

function Map({offers, city}: MapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const leafletMapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current === null) {
      return;
    }

    const map = L.map(mapRef.current).setView(
      [city.location.latitude, city.location.longitude],
      city.location.zoom
    );

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    leafletMapRef.current = map;

    return () => {
      map.remove();
      leafletMapRef.current = null;
    };
  }, [city]);

  useEffect(() => {
    const map = leafletMapRef.current;

    if (map === null) {
      return;
    }

    const markers = offers.map((offer) => L.marker(
      [offer.location.latitude, offer.location.longitude],
      {icon: defaultCustomIcon}
    ));

    const markersLayer = L.layerGroup(markers).addTo(map);

    return () => {
      markersLayer.remove();
    };
  }, [offers]);

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}

export default Map;
