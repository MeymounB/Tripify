import React from "react";
import { divIcon, LatLngTuple } from "leaflet";
import { Marker, Popup } from "react-leaflet";

interface IPin {
  position: LatLngTuple;
  popup?: React.ReactNode;
}

const EventPin = ({ position, popup }: IPin) => {
  return (
    <Marker
      position={position}
      icon={divIcon({
        className: "pin",
        html: `<img src='/eventPin.png' alt='pin' class='h-full w-full' />`,
        iconSize: [40, 40],
        iconAnchor: [0, 40],
        popupAnchor: [20, -40],
      })}
    >
      <Popup>{popup}</Popup>
    </Marker>
  );
};

export default EventPin;
