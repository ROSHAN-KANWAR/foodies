import React,{Fragment} from 'react'
import MovieSlider from './MovieSlider'

function Movies({name}) {
  return (
    <Fragment>
    <div className='movies'>
    <div className='movies_bar'>
    <h2>Popular {name}</h2>
  <span>View all</span>
    </div>
    <MovieSlider/>
    </div>
    </Fragment>
  )
}

export default Movies