import React,{Fragment,useState} from 'react'
import  {signInWithEmailAndPassword, } from "firebase/auth"
import {auth} from "../Config/firebase"

import Header from "../Components/Header"
import { Link,useNavigate } from 'react-router-dom'
function Login() {
  const [user,setUser] = useState({
    password:"",
    email:""
});
const navigate = useNavigate();
//submit loader
const [loader, setloader] = useState(true)
let name ,value;
const getformData=(e)=>{
name=e.target.name;
value=e.target.value;
setUser({...user,[name]:value})
}
//post data
const PostData2=(e)=>{
  
  e.preventDefault();
  const{email,password} = user
  setloader(false)
  if(user.email!=="" && user.password!==""){
    signInWithEmailAndPassword(auth, email,password)
    .then((userCredential) => {
      // Signed in 
      setloader(false)
      const res = userCredential.user
      navigate("/dashboard");
      // ...
    })
    .catch((error) => {
      setloader(false)
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode);
      setUser({
        password:"",
      })
      setloader(true)
      // ..
    });
  }
  //else
  else{
    setloader(true)
    alert("Please Fill Values")
  }
}
  return (
    <Fragment>
    <Header/>
<div className='flex justify-center items-center  px-3 md:py-20 py-4'>

<form method="post" className="py-6 md:px-20 px-2">
<p className="w-full text-4xl font-medium text-center leading-snug font-serif">Sign In for an account</p>
        
<div className="mt-4">
<label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
<input
value={user.email} onChange={getformData} name="email"        
 className=" text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email"/>
</div>
<div className="mt-4">
<div className="flex justify-between">
    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
    <a href="#" className="text-xs text-gray-500">Forget Password?</a>
</div>
<input
value={user.password} onChange={getformData} name="password" 
className=" text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password"/>
</div>
<div className="mt-8 text-center">
{
  loader ?
  <div className="relative">
  <button onClick={PostData2} type="submit"
  className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-primary
  rounded-lg">
  Login
  </button>  
</div>
   :
    <div className="flex h-1/2 justify-center w-2/3 animate-spin">
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-loader-quarter" width="54" height="54" viewBox="0 0 24 24" strokWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"> 
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <line x1="12" y1="6" x2="12" y2="3" /> <line x1="6" y1="12" x2="3" y2="12" /> <line x1="7.75" y1="7.75" x2="5.6" y2="5.6" /> </svg> 
    </div>
}
 </div>

 <p className='text-sm mt-3 '>Have Not an Account
 <Link to="/register">
   <b>  Signup</b>
 </Link>
 </p>
</form>
</div>
</Fragment>
  )
}

export default Login