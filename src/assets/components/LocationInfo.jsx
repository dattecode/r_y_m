import "./style/location.css"

const LocationInfo = ({currentLocation}) => {
  return (
    <section className="cotaintLocation">
        <h2>{currentLocation?.name}</h2>
        <ul className="locationInfo">
            <li>Type: {currentLocation?.type}</li>
            <li>Dimension: {currentLocation?.dimension}</li>
            <li>Population: {currentLocation?.residents.length}</li>
        </ul>
    </section>
  )
}

export default LocationInfo