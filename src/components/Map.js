import React from 'react'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
  return (
    <div className="map-wrap">
      {/* <MapContainer center={{ lat: 51.505, lng: -0.09 }} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[44.96366, 19.61045]}>
          <Popup>Location of crime</Popup>
        </Marker>
      </MapContainer> */}
      <div className="heading">Map Integration</div>
      <div className="map">

      </div>
    </div>
  )
}

export default Map