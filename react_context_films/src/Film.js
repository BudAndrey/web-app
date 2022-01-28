import { useContext, useEffect,useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ThemeContext } from "./App"

export function Film (){
    const url=`http://www.omdbapi.com/?apikey=721d15d3`
    const {id}=useParams()
    const [theme]=useContext(ThemeContext)
    const [film,setFilm]=useState()

    let detailsUrl=url+`&i=${id}&plot=full`
    useEffect(async function (){
        const response= await fetch(detailsUrl)
        const res = await response.json()
        if (res.Response!=='False'){
            setFilm(res);
        }
        else 
            setFilm([{Title: "Not Found"}])
    },[])


    return (
        <div id="details" className="card m-2 p-3 w-75" style={theme}>
            <div className="row g-0">
              <div className="col-md-4">
                <img id="detailsImg" src={film?.Poster} className="img-fluid rounded-start" style={ {width: '100%'}}  alt="..."></img>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div className="card-text d-flex  align-items-center">
                    <div className="m-3"><b>Title:</b></div>
                    <div id="dTitle" className="align-middle">{film?.Title}</div>
                  </div>
                  <div className="card-text d-flex  align-items-center">
                    <div className="m-3"><b>Released:</b></div>
                    <div id="released" className="align-middle">{film?.Released}</div>
                  </div>
                  <div className="card-text d-flex  align-items-center">
                    <div className="m-3"><b>Genre:</b></div>
                    <div id="genre" className="align-middle">{film?.Genre}</div>
                  </div>
                  <div className="card-text d-flex  align-items-center">
                    <div className="m-3"><b>Country:</b></div>
                    <div id="country" className="align-middle">{film?.Country}</div>
                  </div>
                  <div className="card-text d-flex  align-items-center">
                    <div className="m-3"><b>Director:</b></div>
                    <div id="director" className="align-middle">{film?.Director}</div>
                  </div>
                  <div className="card-text d-flex  align-items-center">
                    <div className="m-3"><b>Writer:</b></div>
                    <div id="writer" className="align-middle">{film?.Writer}</div>
                  </div>
                  <div className="card-text d-flex  align-items-center">
                    <div className="m-3"><b>Actors:</b></div>
                    <div id="actors" className="align-middle">{film?.Actors}</div>
                  </div>
                  <div className="card-text d-flex  align-items-center">
                    <div className="m-3"><b>Awards:</b></div>
                    <div id="awards" className="align-middle">{film?.Awards}</div>
                  </div>

                </div>
              </div>
            </div>
        </div>
    )
}