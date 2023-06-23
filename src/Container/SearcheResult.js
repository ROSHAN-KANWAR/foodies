import React,{useState} from 'react'
import Header from "../Components/Header"
import {useSelector,useDispatch} from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link } from "react-router-dom";
import {Container,Row,Col, Form } from "react-bootstrap";
function SearcheResult() {
  const [state, setState] = useState(false)

  const myrandom = useSelector((state)=>state.FetchSEARCH.searchs)
 const allcate = myrandom.map((e)=>e.strCategory)
   const mycateset= new Set(allcate); 
    const uniqueCategories = Array.from(mycateset);
    const CateFilter=(e)=>{
      console.log(e.target.value)
    }
	return (
    <>
 <div>
 <Header/>
        </div>
{myrandom.length === 0 ? (
        <div className="text-center">
          {/* Show this element when the cart is empty */}
        <h2>All Data Are Removed - Please Search Again ! </h2>
        <Link to="/" >
      <Button  variant="warning">Home</Button>
        </Link>
        </div>
      ) : (
        <div>
          {/* Show this element when the cart is not empty */}
    <div className='searchpage'>
<div>
<ul className="d-flex text-white justify-center py-2">
{
  uniqueCategories.map((e,index)=>{
   return (
<li className="px-2 catelink">
<Button className="text-white " value={e} onClick={CateFilter}>{e}</Button>
</li>
   )
  })
}
</ul>
</div>

      <Container className="d-flex justify-center">
      <Row className="mx-auto d-flex justify-content-center">
{
myrandom.map((e,index)=>{
  const{strMealThumb,strMeal ,strMeasure1,strMeasure10,idMeal} = e
  return(
<>
<Col className="mx-auto d-flex justify-content-center" key={index}>
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
        </div>
      )}

	</>
  )
}

export default SearcheResult
