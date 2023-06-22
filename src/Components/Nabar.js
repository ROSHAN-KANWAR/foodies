import React from 'react';
import {useSelector,useDispatch} from "react-redux"
import {Ince,Decs} from "../Services/Action/Action"
function Homes() {
const mystate = useSelector((state=>state.ChangeNumber))
const dispatch = useDispatch();

  return (
  <div>
 <a title='decs' onClick={()=>dispatch(Decs())} style={{fontSize:'30px'}}>-</a>
  <input value={mystate}/>
  
  <a title='incs' style={{fontSize:'30px'}} onClick={()=>dispatch(Ince())}>+</a>
  </div>
  )
}

export default Homes