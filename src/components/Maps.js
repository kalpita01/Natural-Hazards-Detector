import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
import { useState } from 'react'

const Maps = ({ center, zoom, eventData }) => {

    const [locationInfo, setLocationInfo] = useState(null)

    

    const markers = eventData.map((event) => {
        if(event.categories[0].id === 8){ 
            return <LocationMarker 
                        lat={event.geometries[0].coordinates[1]} 
                        lng={event.geometries[0].coordinates[0]} 
                        iconType={'ForestFireIcon'}
                        onClick={() => setLocationInfo({id: event.id, title: event.title, category: 'Wildfire'})}
                    />
        }
        else if(event.categories[0].id === 12){
            if(event.geometries[0].coordinates.length > 1){
                return <LocationMarker 
                            lat={event.geometries[0].coordinates[1]} 
                            lng={event.geometries[0].coordinates[0]} 
                            iconType={'VolcanoIcon'} 
                            onClick={() => setLocationInfo({id: event.id, title: event.title, category: 'Volcano'})}
                        />
            }
            else {
                event.geometries[0].coordinates[0].map((single) => (
                    <LocationMarker 
                        lat={single[1]} 
                        lng={single[0]} 
                        iconType={'VolcanoIcon'}
                        onClick={() => setLocationInfo({id: event.id, title: event.title, category: 'Volcano'})}
                    />
                ))
            }
        }
        else if(event.categories[0].id === 15){
            return <LocationMarker 
                        lat={event.geometries[0].coordinates[1]} 
                        lng={event.geometries[0].coordinates[0]} 
                        iconType={'IceBergIcon'}
                        onClick={() => setLocationInfo({id: event.id, title: event.title, category: 'Iceberg'})}
                    />
        }
        else if(event.categories[0].id === 10){
            return <LocationMarker 
                        lat={event.geometries[0].coordinates[1]} 
                        lng={event.geometries[0].coordinates[0]} 
                        iconType={'StormIcon'}
                        onClick={() => setLocationInfo({id: event.id, title: event.title, category: 'Storm'})}
                    />
        }
        return null;
    })
    
    return (
        <div className="map"> 
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDo2yQHPVgnewyoTIOTFajEuCBrkU49VIA' }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo}/>} 
        </div>
    )
}

Maps.defaultProps = {
    center: {
        lat: 42.32,
        lng: -122.45
    },
    zoom: 6
}

export default Maps
