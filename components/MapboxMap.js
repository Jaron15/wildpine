import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function MapboxMap() {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-112.28087722374462, 33.668897235094754], // Lng, Lat
      zoom: 14,
    });

    // Ensure the marker is correctly aligned with the map projection
    const marker = new mapboxgl.Marker({ color: 'red' })
      .setLngLat([-112.28087722374462, 33.668897235094754])
      .addTo(map);

    map.on('load', () => {
      map.resize(); // Ensure the map resizes correctly when loaded
    });

    return () => map.remove(); // Clean up on unmount
  }, []);

  return (
    <div className="w-full h-full border">
      <div ref={mapContainer} style={{ width: '100%', height: '100%'}} />
    </div>
  );
}
