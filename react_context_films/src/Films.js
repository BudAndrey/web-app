import { useContext, useEffect,useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ThemeContext } from "./App"


export function Films(x){
    const [theme]=useContext(ThemeContext)
    const {name}=useParams([])
    
    const url=`http://www.omdbapi.com/?apikey=721d15d3`

    const [arr,setArr]=useState([])

    useEffect( async function (){
        
        const searchUrl=url+"&s="+name
        const response= await fetch(searchUrl)
        const res = await response.json()

        if (res.Response!=='False'){
            setArr(res.Search);
        }
        else 
            setArr([{Title: "Not Found",imdbID:'any'}])

    },[name])

    return(
         arr.map((x)=>{

            return (<div style={theme} key={x.Title} className="card w-25 m-4 p-2">
                <img className='card-img-top' src={x.Poster}></img>
              <Link id={x.imdbID} to={`/film/${x.imdbID}`}><h3  className='card-title text-center'>{x.Title}</h3></Link>  
            </div>)
        })

    )
}