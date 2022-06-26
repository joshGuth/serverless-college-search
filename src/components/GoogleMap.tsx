import React from 'react'
import { College } from '../common/types'
import { GoogleMap, LoadScriptNext, Marker } from '@react-google-maps/api'

type Props = {
  colleges: College[] | null
}

const containerStyle = {
  width: '100%',
  height: '400px',
}
// Center on the US
const center = {
  lat: 39.8097343,
  lng: -98.5556199,
}

const CollegeMap: React.FC<Props> = ({ colleges }) => {
  return (
    <>
      {process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY && (
        <LoadScriptNext
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}
        >
          <GoogleMap
            data-testid="map"
            mapContainerStyle={containerStyle}
            center={center}
            zoom={3}
          >
            {colleges &&
              colleges.map(({ location, id }) => (
                <Marker
                  key={id}
                  position={{
                    lat: +location.lat,
                    lng: +location.lon,
                  }}
                />
              ))}
          </GoogleMap>
        </LoadScriptNext>
      )}
    </>
  )
}

export default CollegeMap
