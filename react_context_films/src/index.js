import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Films } from './Films';
import { Film } from './Film';
import { NotFound } from './NotFound';

const routing=(
<Router>
  <Routes>
  <Route path="/" element={<App/>}>
      <Route path="/:name" element={<Films/>}/>  
      <Route path="/film/:id" element={<Film/>}/>
  </Route>
  <Route path="any" element={<NotFound/>}/>
  <Route path="/film/any" element={<App/>}/>
  </Routes>
</Router>
)
ReactDOM.render(
    routing,
  document.getElementById('root')
);


