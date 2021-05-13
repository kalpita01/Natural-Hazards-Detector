import { useState, useEffect } from 'react'
import Maps from './components/Maps'
import Loader from './components/Loader'


function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  const URL_LINK = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events'

  useEffect(() => {
    const fetchEvents = async () => {
      console.log('working')
      setLoading(true)
      const result = await fetch(URL_LINK)
      const { events } = await result.json()

      setEventData(events)
      setLoading(false)
      console.log('yay');
    }

    fetchEvents()
  }, [])

  return (
    <div>
      {loading ? <Loader /> : <Maps eventData={eventData}/>}
    </div>
  );
}

export default App;
