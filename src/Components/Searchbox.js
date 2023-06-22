import React, { Fragment,useState } from 'react'
import { Button,Container,Row,Col, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import {useSelector,useDispatch} from "react-redux";
import {SEARCHFetch} from "../Services/Action/Action"
function Searchbox() {
  const distch = useDispatch();
 const navigate= useNavigate();
  const [loader, setloader] = useState(true)
  const [searchbox, setSearchbox] = useState("")
  const HandleSubmit=async(e)=>{
  e.preventDefault();
  setloader(false)
return await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchbox}`)
.then((res)=>{
  distch(SEARCHFetch(res.data.meals));
  setloader(true)
  setSearchbox("")
  if (res.data.meals.length>0){
 navigate("/search-result") 
  }
})
.catch((error)=>{
  console.log(error)
  setloader(false)
  alert("Result Not Found")
  setloader(true)
})
  }
  return (
   <Fragment>
   <Container className="mt-5 w-100">
   <Form onSubmit={HandleSubmit} className="d-flex" method='post'>
     <Form.Control
       type="search"
       value={searchbox}
       onChange={(e)=>{setSearchbox(e.target.value)}}
       placeholder="Search"
       className=" px-2 py-3 ser rounded-0"
       aria-label="Search"
     />
     {
      loader ?
     <Button type="submit"   className="rounded-0" variant="danger">
       Search
     </Button>
     :
     <Button type="submit"   className="rounded-0" variant="danger">
       <Spinner animation="grow"  role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
     </Button>
     
     }
   </Form>

</Container>
   </Fragment>
  )
}

export default Searchbox