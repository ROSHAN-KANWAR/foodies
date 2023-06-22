import React,{Fragment,useState} from 'react'
import {auth} from "../Config/firebase"
import  {createUserWithEmailAndPassword,updateProfile} from "firebase/auth"
import { Link,useNavigate } from 'react-router-dom'
function SIgnup() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: ""
  });

  const [loader, setLoader] = useState(true);
const navigate = useNavigate()
  const getformData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData2 = (e) => {
    e.preventDefault();
    const { username, email, password } = user;
    setLoader(false);

    if (username && email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setLoader(false)
          const res = userCredential.user;
          updateProfile(res, {
            displayName: username
          })
            .then(() => {
              setLoader(false);
              navigate("/dashboard");
            })
            .catch((error) => {
              setLoader(false);
              alert("Error updating profile: " + error.message);
            });
        })
        .catch((error) => {
          setLoader(true);
          const errorCode = error.code;
          const errorMessage = error.message;
          alert("Signup error: " + errorCode + " - " + errorMessage);
        });
    } else {
      setLoader(true);
      alert("Please fill in all the fields");
    }
  };


  return (
<Fragment>
<div classNameName=" md:px-12 flex justify-center items-center" >
<div className="bg-white z-0">
  <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
      xl:px-5 lg:flex-row">
    <div className="flex flex-col items-center w-full  md:pr-10 md:pb-20 md:pl-10 lg:flex-row">
      <div className="w-full md:block hidden bg-cover max-w-md lg:max-w-2xl lg:w-7/12">
        <div className="flex flex-col items-center justify-center w-full h-full  lg:pr-10">
          <img  alt="meesho signup" src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png" className="btn-"/>
        </div>
      </div>
      <div className="w-full mt-20 mr-0 mb-0 ml-0 max-w-2xl lg:mt-0 lg:w-5/12 md:w-2/3 w-100">
        <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
            ">
          <p className="w-full text-4xl font-medium text-center leading-snug font-serif">Sign up for an account</p>
        
          <form method="post" onSubmit={PostData2} className="w-full mt-6 mr-0 mb-0 ml-0 space-y-8">
          <div className="">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute">Username</p>
              <input placeholder="Enter Name" 
              value={user.username} onChange={getformData} name="username" 
              type="text" className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"/>
            </div>
            <div className="relative">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Email</p>
              <input placeholder="example@gmail.com" 
              value={user.email} onChange={getformData} name="email" 
              type="text" className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"/>
            </div>
            <div className="relative">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute">Password</p>
              <input placeholder="Password" type="password" 
              value={user.password} onChange={getformData} name="password" 
              className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"/>
            </div>
            {
              loader ?
              <button  type="submit"
              className="w-full cursor-pointer inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-pinkbase
              rounded-lg">
              Signup
              </button>  
        
               :
                <div className="flex h-1/2 justify-center w-2/3 animate-spin">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-loader-quarter" width="54" height="54" viewBox="0 0 24 24" strokWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"> 
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <line x1="12" y1="6" x2="12" y2="3" /> <line x1="6" y1="12" x2="3" y2="12" /> <line x1="7.75" y1="7.75" x2="5.6" y2="5.6" /> </svg> 
                </div>
            }
            
            </form>
            <p className='text-sm mt-3 '>Have Already an Account
            <Link to="/signin">
            <b> Signin</b>
            </Link>
            </p>
            </div>
         
        </div>
       
         </div>
    </div>
  </div>
</div>

</Fragment>
  )
}

export default SIgnup