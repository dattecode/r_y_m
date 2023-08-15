import React, { useEffect, useState } from 'react'
import "./style/residentCard.css"
import axios from 'axios';

const ResidentCard = ({residentUrl}) => {
    const [residentInfo, setresidentInfo] = useState(null);

    const residentStatus = {
        Alive: "statusAlive",
        Dead: "statusDead",
        unknown: "statusUnknown"
    }

    useEffect(() => {
        axios
            .get(residentUrl)
            .then(({data}) => setresidentInfo(data))
            .catch((err) => console.log(err))
    }, [])
  return (
    <article className='containerCard'>
        <header className='headerCard'>
            <img src={residentInfo?.image} className='imageSpecies' />
            <div className='statusCont'>
                <div className={`statusCircle ${residentStatus[residentInfo?.status]}`}>        
                </div>
                <div>
                {residentInfo?.status}
                </div>
            </div>
        </header>
        <section className='textContent'>
            <h3 className='titleName'>{residentInfo?.name}</h3>
            <ul className='infoSpecies'>
                <li><div className='characterCard'>Species:</div> {residentInfo?.species}</li>
                <li><div className='characterCard'>Origin:</div> {residentInfo?.origin.name}</li>
                <li><div className='characterCard'>Times appear:</div> {residentInfo?.episode.length}</li>
            </ul>
        </section>
    </article>
  )
}

export default ResidentCard