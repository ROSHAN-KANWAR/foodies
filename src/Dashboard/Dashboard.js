import React from 'react'
import {auth} from "../Config/firebase"
import {useNavigate } from 'react-router-dom'
import Header from "../Components/Header"
import {useSelector,useDispatch} from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link } from "react-router-dom";
import {Container,Row,Col, Form } from "react-bootstrap";

function Dashboard() {
	const navigate = useNavigate()

  const myrandom = useSelector((state)=>state.FetchSEARCH.searchs)
  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        // Sign out successful
        alert("User signed out successfully");
       navigate("/login")
      })
      .catch((error) => {
        // An error occurred
        console.log("Sign out error: ", error);
      });
  };
	return (
		<>
		<Header/>
<div className="px-2 border-2">
<h4>My Favourate Food </h4>
      <Container className="d-flex justify-center mt-5">
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



<div className="mx-2 py-4 md-2 text-center">
	<button type="submit" onClick={handleSignOut}
 className="w-1/2 cursor-pointer inline-block pt-2 pr-2 pb-2 pl-2 text-xl font-medium text-center text-white bg-danger">
 Signout
 </button> 	
</div>
		</>
	)
}

export default Dashboard