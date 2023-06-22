import React from 'react'
import { useParams } from 'react-router-dom';
import {useSelector} from "react-redux";
import Header from "../Components/Header"
import {Container,Row,Col, Form,Image,Button } from "react-bootstrap";
function FoodDetail() {
  const{id} = useParams();
  const myrandom = useSelector((state)=>state.FetchSEARCH.searchs)
 
	const objs=myrandom.filter((e)=>{
		return e.idMeal===id
	})
const Back=()=>{
	window.history.back();
}
	return (
		<>
 <Header/>
 <Container className="">
<Button onClick={Back} variant="warning">Back</Button>
        
      <Row className="mx-12 py-20">
      <Col md={12}>
<h2>Meal:{objs[0].strMeal} , Category :{objs[0].strCategory}</h2>
      </Col>
<Col className="fooddetail" >
<img src= {objs[0].strMealThumb} className="img" />;
</Col>
<Col md={12}>
<p>{objs[0].strInstructions} </p>
</Col>
<Col md={12}>
<a href={objs[0].strYoutube} target="__blank">{objs[0].strYoutube}</a>
</Col>
      </Row>
      </Container>  
  	
		</>
	)
}

export default FoodDetail