import React, { Fragment,useEffect,useState } from 'react'
import Carousel from "react-multi-carousel";
import {Responsive} from "./Responsive"
import "react-multi-carousel/lib/styles.css";
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import {useSelector,useDispatch} from "react-redux";
import {RandomFetch} from "../Services/Action/Action"
function MovieSlider() {
  const distch = useDispatch();
  const [loader, setloader] = useState(true)
  const myrandom = useSelector((state)=>state.FetchRandom.randomData)
    const myrandom1 = useSelector((state)=>state.FetchSEARCH.searchs)
    useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setloader(false)
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian');
      distch(RandomFetch(response.data.meals));
      setloader(true)
    } catch (error) {
      setloader(false)
      console.error(error);
    
    }
  };

  return (
    <Fragment> 
    {
      loader ?
      <Carousel responsive={Responsive}>
    {
      myrandom.map((e)=>{
        const{strMeal,strMealThumb} = e
        return(
          <>
          <div className='sliderimg'>
          <Card style={{ width: '16rem' }}>
          <Card.Img variant="top" src={strMealThumb} />
        </Card>
          </div> 
          </>
        )
      })
     
    }
  </Carousel>
      :
      <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    }
    </Fragment>
  )
}

export default MovieSlider




