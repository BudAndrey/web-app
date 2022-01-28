import { Link,useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export function Planet (){
    const {id}=useParams();
    const url=`https://swapi.dev/api/planets/${id}`
    const [planet,setPlanet]=useState({residents:[],films:[]})
    const [person,setPersons]=useState([])
    const [films,setFilms]=useState([])

    useEffect( async ()=>{
        const response= await fetch(url)
        const planet= await response.json()
        setPlanet(planet)

        if(planet.films.length!=0){
            const arr=[]
            for (let i = 0; i < planet.films.length; i++) {
                let res2= await fetch(planet.films[i])
                let film=await res2.json()
                arr.push(film)
            }
            setFilms(arr)
        }

        if(planet.residents.length!=0){
            const arr=[]
            for (let i = 0; i < planet.residents.length; i++) {
                let res=await fetch(planet.residents[i])
                let person=await res.json()
                arr.push(person)
            }
            setPersons(arr)
        }

        else 
            setPersons([])

    },[id])

    return (
        <div  className='card m-4 text-center sticky-top'>
                        <h2 className='card-title'>{planet.name}</h2>

                        <div className="d-flex justify-content-center"> 
                            <div className="m-2">
                                    <div className="m-2">rotation_period: <b>{planet.rotation_period}</b></div>
                                    <div className="m-2">orbital_period:<b> {planet.orbital_period}</b></div>
                                    <div className="m-2">diameter: <b>{planet.diameter}</b></div>
                                    <div className="m-2">climate: <b>{planet.climate}</b></div>
                                </div>
                                <div className="m-2">
                                    <div className="m-2">gravity: <b>{planet.gravity}</b></div>
                                    <div className="m-2">terrain: <b>{planet.terrain}</b></div>
                                    <div className="m-2">surface_water: <b>{planet.surface_water}</b></div>
                                    <div className="m-2">population: <b>{planet.population}</b></div>
                                </div>
                        </div>
                        <ul className="list-inline">
                            {planet.residents.length!==0 ? <h4>Residents</h4>:''}
                            {person.map(r=>
                                <Link key={r.name} to={`/persons/${r.url.substring(29)}`}>
                                    <li key={r.name} className="list-inline-item">Resident {r.name}</li>
                                </Link>
                            )}
                             {planet.films.length!==0 ? <h4>Films</h4>:''}
                            {films.map(f=>
                                <Link key={f.title} to={`/films/${f.url.substring(28)}`}>
                                    <li key={f.title} className="list-inline-item">Film {f.title}</li>
                                </Link>
                            )}
                        </ul>
                        
        </div>
    )
}