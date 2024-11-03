import "../../styles/Mapa/Mapa.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useRef, useEffect, useState } from "react";

export const Mapa = () => {
    const mapRef = useRef();
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        const options = {
            method: "GET",
            headers: {},
        };

        fetch("http://localhost:8000/api/places", options)
            .then((response) => response.json())
            .then((response) => setPlaces(response))
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        const placesWithCoordinates = places.filter(
            (place) => place.LATITUDE && place.LONGITUDE
        );

        if (placesWithCoordinates.length > 0 && mapRef.current) {
            mapRef.current.fitBounds(
                placesWithCoordinates.map((place) => [
                    place.LATITUDE,
                    place.LONGITUDE,
                ])
            );
        }
    }, [places]);

    return (
        <article className="mapa-container">
            <MapContainer
                style={{ height: "auto", width: "100%", aspectRatio: "16/9" }}
                ref={mapRef}
                whenReady={() => {
                    console.log("Map is ready!");
                }}
                center={[0, 0]}
                zoom={13}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {places.map(
                    (place) =>
                        place.LATITUDE &&
                        place.LONGITUDE && (
                            <Marker
                                key={place.ID}
                                position={[place.LATITUDE, place.LONGITUDE]}
                            >
                                <Popup>{place.DISPLAY_NAME}</Popup>
                            </Marker>
                        )
                )}
            </MapContainer>
        </article>
    );
};
