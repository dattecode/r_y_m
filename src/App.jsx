import { useEffect, useState } from 'react'
import './App.css'
import {GetRandom}from "./assets/utils/random";
import LocationForm from './assets/components/LocationForm';
import LocationInfo from './assets/components/LocationInfo';
import ResidentList from './assets/components/ResidentList';
import Loading from './assets/components/Loading';
import axios from 'axios';


function App() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const locationId = e.target.newLocation.value;
  
    setIsLoading(true);
  
    setTimeout(() => {
      fetchDimension(locationId);
    }, 1000);
  };
  const fetchDimension = (id) => {
    const URL = `https://rickandmortyapi.com/api/location/${id}`

    setIsLoading(true)

    axios
      .get(URL)
      .then(({data}) => {
        setCurrentLocation(data)
        setIsLoading(false)
      })
      .catch((err) =>  {
        console.log(err)
        setIsLoading(false)
      })
  }

  useEffect(()=>{
    const dimensionId = GetRandom(126)
    fetchDimension(dimensionId)
  },[])

  return (
    <>
      <main className='mainPage'>
        {isLoading ? <Loading /> : null} 
        <LocationForm handleSubmit={handleSubmit}/>
        <LocationInfo currentLocation={currentLocation}/>
        <ResidentList residents={currentLocation?.residents ?? []} currentLocation={currentLocation}/>
      </main>
    </>
  )
}

export default App
