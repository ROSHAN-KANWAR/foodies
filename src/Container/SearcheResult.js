import React from 'react'
import Header from "../Components/Header"
import {useSelector,useDispatch} from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link } from "react-router-dom";
import {Container,Row,Col, Form } from "react-bootstrap";
function SearcheResult() {
  const myrandom = useSelector((state)=>state.FetchSEARCH.searchs)
	return (
		<div className='searchpage'>
        <div>
 <Header/>
        </div>
      <Container className="d-flex justify-center">
      <Row className="mx-auto d-flex justify-content-center">
{
myrandom.map((e)=>{
	const{strMealThumb,strMeal ,strMeasure1,strMeasure10,idMeal} = e
	return(
<>
<Col className="mx-auto d-flex justify-content-center">
<Card style={{ width: '18rem' }} className="my-3">
      <Card.Img variant="top" src={strMealThumb}  loading="lazy"/>
      <Card.Body>
        <Card.Title>{strMeal}</Card.Title>
        <Card.Text>
          Ingredient-: {strMeasure10} ,{strMeasure1} ,{e.strMeasure4} ,{e.strMeasure2}
        </Card.Text>
        <Link to={`/food-detail/${idMeal}`}>
        <Button variant="primary">Get Reciepe</Button>
        </Link>
      </Card.Body>
    </Card>

</Col>

</>
	)
})
  }
      </Row>
      </Container>  
  	
  	</div>
	)
}

export default SearcheResult
