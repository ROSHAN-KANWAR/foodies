import React, { Fragment } from 'react'
import Home from './Container/Home'
import Movies from './Container/Movies'
function App() {
  return (
    <Fragment>
   <Home/>
   <Movies name="Trailer"/>
   <Movies name="Web Series"/>
   <Movies name="Movies"/>
   <Movies name="Hollywood"/>
    </Fragment>
  )
}

export default App