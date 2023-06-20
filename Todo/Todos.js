import React ,{useState} from 'react'

const Todos = () => {
  const [inp ,setinp] = useState("");
  const [items, setitems] = useState([]);

  const Events = (e)=>{
    setinp(e.target.value);
  };
  const Listitems = ()=>{
    
    setitems((arritems)=>{
      return (
        [...arritems ,inp]
      )
    })
    setinp("");
  };
  const Deleteitem = (id)=>{
    setitems((olditem)=>{
      return olditem.filter((els ,index)=>{
        return index!=id;
      });
    })
  }
  return (
   <>
   <div className='container'>
        <div className='row'>
        <div className='col-md-12'>
     <h1 className = "mt-3 text-center font-bold">Todo Applications - React.js</h1>
        <div>
       
         <input type="text" value = {inp} onChange = {Events} />
         
         <button onClick={Listitems} >+</button>
        <h3>List Items</h3>
        {
          items.map((items ,index)=>{
            return (
              <>
              <div>
              <span style={{cursor:'pointer'}} onClick={()=>{
                Deleteitem(index)
              }} >X</span>
              <p key={index}>{items}</p>
              </div>
              </>
            )
          })
        }
        </div>
        </div>
        </div>
        </div>   
   
   </>
  )
}

export default Todos