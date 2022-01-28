import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from './App'
import { Outlet } from 'react-router-dom'
import { Films } from './Films'



export function Finder(){
    const url=`http://www.omdbapi.com/?apikey=721d15d3`

    const [arr,setArr]=useState([])

    const [theme,change]=useContext(ThemeContext) 

     async function Search(e){
        e.preventDefault()
        const film=e.target.form["film"].value 
        const searchUrl=url+"&s="+film
        const response= await fetch(searchUrl)
        const res = await response.json()

        if (res.Response!=='False'){
            setArr(res.Search);
        }
        else 
            setArr([{Title: "Not Found"}])

    }

    return(
        <div>
        <form>
            <input name="film" className="form-input m-2" placeholder="Film name"></input>
            <button type="submit" onClick={Search} className="btn btn-secondary">Search</button>
        </form>
        <div className='d-flex flex-wrap justify-content-around '>
            {/* <Outlet/> */}
        {arr.map((x)=>{
            return <Films key={x.Title} Poster={x.Poster} Title={x.Title}/>
            // <div style={theme} key={x.Title} className="card w-25 m-4 p-2">
            //     <img className='card-img-top' src={x.Poster}></img>
            //     <h3  className='card-title text-center'>{x.Title}</h3>
            // </div>)
        })}
        </div>
        </div>
    )
}

export default Finder