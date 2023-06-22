import React,{Fragment} from 'react'
import Header from '../Components/Header';
import Searchbox from "../Components/Searchbox"
import Movies from "./Movies"
function Home() {
  //const mysate = useSelector((state)=>state.ChangeNumber)
  return (
    <Fragment>
   <div className='root'>
 <Header/>
   <main>
   <div>
   <h1>Unlimited Food, Reciepe,Dishes and more</h1>
   <span>Cook anywhere. Ready anytime.</span><br></br>
  <span>Ready to Cook? Enter your favorate food name or Reciepe and More</span>
   </div>
   <div className='searchs'>
  <Searchbox/>
 </div>
   </main>
   </div>
    </Fragment>
  )
}

export default Home