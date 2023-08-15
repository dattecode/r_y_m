import { useEffect, useState } from 'react'
import './App.css'
import {GetRandom}from "./assets/utils/random";
import LocationForm from './assets/components/LocationForm';
import LocationInfo from './assets/components/LocationInfo';
import ResidentList from './assets/components/ResidentList';
import axios from 'axios';


function App() {
  const [currentLocation, setCurrentLocation] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    const locationId = e.target.newLocation.value
    fetchDimension(locationId)
  }

  const fetchDimension = (id) => {
    const URL = `https://rickandmortyapi.com/api/location/${id}`

    axios
      .get(URL)
      .then(({data}) => setCurrentLocation(data))
      .catch((err) => console.log(err))
  }

  useEffect(()=>{
    const dimensionId = GetRandom(126)
    fetchDimension(dimensionId)
  },[])

  return (
    <>
      <main className='mainPage'>
        <LocationForm handleSubmit={handleSubmit}/>
        <LocationInfo currentLocation={currentLocation}/>
        <ResidentList residents={currentLocation?.residents ?? []} currentLocation={currentLocation}/>
      </main>
    </>
  )
}

export default App
