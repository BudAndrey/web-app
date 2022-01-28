import { useContext } from "react"
import { ThemeContext } from "./App"


export function ThemeSwithcer(){

    const [theme,change]=useContext(ThemeContext) 


    return (

            <div style={theme} className="form-check form-switch d-inline-block" >
                 <input  onChange={change} className="form-check-input me-3" checked={theme.name=='light'} type="checkbox" role="switch" id="flexSwitchCheckDefault"/  >
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change Theme</label>
            </div>

    )
}