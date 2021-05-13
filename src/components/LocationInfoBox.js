
const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Event Location Info</h2>
            <hr/>
            <ul>
                <li>ID: <strong>{ info.id }</strong></li>
                <li>TITLE: <strong>{ info.title }</strong></li>
                <li>CATEGORY: <strong>{ info.category }</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
