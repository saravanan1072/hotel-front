

import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
var name;
export default function Form() {
  const url="https://hotel-backend-enam.onrender.com/ownerLogin";
  const [state,setState]=useState()

  const [data1, setData] = useState({ email: "", password: "", });
  const navigate=useNavigate()



const handledata=async(e)=>{
  e.preventDefault()
  await axios.post(url,data1)
  .then((res)=>{
    console.log(res);
    name=res.data.name;
     setState(res.data.result)
     alert(res.data.msg)
  })
  .catch((err)=>{console.log(err)})
  
}
  
  

  

 const handleChange = (e) => {
  
    setData({ ...data1, [e.target.name]: e.target.value });
  };
  return (

     <div  className="pic">
       <div className="reg-container">
      <div className="reg-con">
      <h1>LOGIN FORM</h1>
        <form onSubmit={handledata}>
        
          <label htmlFor="email">Email : </label>
          <input
            required
            type="email"
            id="email"
            value={data1.email}
            name="email"
            onChange={handleChange}
            placeholder="enter a email here!..."
          />
          <br></br>
          <label htmlFor="form">password : </label>
          <input
            required
            type="password"
            id="password"
            value={data1.password}
            name="password"
            onChange={handleChange}
            placeholder="password?..."
          />
         
           <br></br><br/>
           <div className="forms">
          Already a customer <Link to={"/Oregister"}><b className="hover">signUp</b></Link>
        </div> <br/> 
          <button type="submit" className="btn" >
          Submit
        </button><br/><br/>
        </form>
      </div>

       
      
      </div>
      {state ? <div>
        { navigate('/owner')}
        
        </div>:""}
     </div>
  )
}

export {name};