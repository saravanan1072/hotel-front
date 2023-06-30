

import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
let login;
export default function Ulogin() {
  const url="https://hotel-backend-enam.onrender.com/userLogin";
const [state,setState]=useState('')
  const [data1, setData] = useState({ email: "", password: "", });
  const navigate=useNavigate()

const handledata=async(e)=>{
  e.preventDefault()
 await axios.post(url,data1).then((res)=>{
  setState(res.data.result)
  alert(res.data.msg)
  login=res.data.name;
  
}).catch((err)=>console.log(err))
}
 const handleChange = (e) => {
  
    setData({ ...data1, [e.target.name]: e.target.value });
  };
  return (
    <div className="pic2">
       <div className="reg-container">
       <div className="reg-con">
       <h1>USER LOGIN FORM</h1>
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
          /> <br></br> <br></br>
          <div className="forms">
          Already a customer <Link to={"/Uregister"}><b className="hover">signUp</b></Link>
        </div>
           <br></br>
          <button type="submit" className="btn" >
          Submit
        </button><br/><br/>
        </form>
       </div>

        {state ? <div>
        { navigate('/user')}
        
        </div>:""}
      
      </div>
    </div>
  )
}
export {login};
