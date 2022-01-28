import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from './App'
import { Link, Outlet } from 'react-router-dom'
import { Films } from './Films'



export function Finder(){
    

    const [film,setFilm]=useState("any")

    const [theme,change]=useContext(ThemeContext)
    
    function filmName(e) {

        setFilm(e.target.value);

    }


    return(
        <div>
        <div>
            <input name="film" onChange={filmName}  className="form-input m-2" placeholder="Film name"></input>
           
            <Link to={`/${film}`} className='btn btn-primary' style={theme} >Search</Link>
        </div>
        <div className='d-flex flex-wrap justify-content-around '>
            <Outlet/>
        </div>
        </div>
    )
}

export default Finder