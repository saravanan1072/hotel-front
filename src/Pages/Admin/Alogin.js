import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
export default function Aregister() {

    const [state,setState]=useState()

  const navigate=useNavigate();
  const url="https://hotel-backend-enam.onrender.com/adminlogin";
  const [data, setData] = useState({
    name: "",
    password: "",
   
  });
const handledata=async(e)=>{
  e.preventDefault()
  

 await axios.post(url,data)
  .then((res)=>{
    console.log(res);
     setState(res.data.result)
     alert(res.data.msg)
  })
  .catch((err)=>{console.log(err)})
  
}
 
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };




  return (
    <div>
      
      <div className="admin-container">
     <div className='admin-con-child new'>
     <h1 style={{textAlign:"center"}}>ADMIN FORM</h1>
        <form onSubmit={handledata}>
          <label htmlFor="name">Name : </label>
          <input
            required
            type="text"
            id="name"
            value={data.name}
            name="name"
            onChange={handleChange}
            placeholder="Enter a firstName..."

          /> <br></br> <br/>
          
          <label htmlFor="password">password : </label>
          <input
            required
            type="password"
            id="password"
            value={data.password}
            name="password"
            onChange={handleChange}
            placeholder="Enter a password?...."
          />
          <br></br><br/>
         
          <button type="submit" className="btn" >
          Submit
        </button><br/>
        </form><br/>
     </div>

       
      
      </div>
      {state ? <div>
        { navigate('/admin')}
        
        </div>:""}
        
     
    </div>
  )
}
