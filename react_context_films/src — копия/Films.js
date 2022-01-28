import { useContext } from "react"
import { ThemeContext } from "./App"


export function Films(x){
    const [theme]=useContext(ThemeContext)

    return(
        <div style={theme} key={x.Title} className="card w-25 m-4 p-2">
                <img className='card-img-top' src={x.Poster}></img>
                <h3  className='card-title text-center'>{x.Title}</h3>
            </div>
    )
}