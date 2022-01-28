import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Films } from './Films';

const routing=(
<Router>
  <Routes>
  <Route path="/" element={<App/>}>
      <Route path="" element={<Films/>}/>  
      {/* <Route path=":id" element={<Film/>}/> */}
  </Route>
  </Routes>
</Router>
)
ReactDOM.render(
    routing,
  document.getElementById('root')
);


