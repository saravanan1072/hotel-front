
import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
export default function Form() {
 
  const url="https://hotel-backend-enam.onrender.com/ownerRegister";
  const [data, setData] = useState({
    hotelName: "",
    email: "",
    password: "",
    mobile:"",
   
  });
const handledata=async(e)=>{
  e.preventDefault()
 await axios.post(url,data)
  .then((res)=>alert(res.data.msg))
  .catch((err)=>{console.log(err);})
}
 

 console.log(data)

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className="pic">
      <div className="reg-container">
       <div className="reg-con">
       <h1 style={{textAlign:"center"}}>OWNER REGISTER FORM</h1>

       <form onSubmit={handledata}>
          <label htmlFor="name">Name : </label>
          <input
            required
            type="text"
            id="name"
            value={data.hotelName}
            name="hotelName"
            onChange={handleChange}
            placeholder="Enter a  Name..."

          />
           <br></br>
          
        
          <label htmlFor="email">Email : </label>
          <input
            required
            type="email"
            id="email"
           value={data.email}
            name="email"
            onChange={handleChange}
            placeholder="Enter a email here!..."

          />
          <br></br>
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
          <br></br>
          <label htmlFor="Mobile">Mobile : </label>
          <input
            required
            type="number"
            id="Mobile"
            value={data.mobile}
            name="mobile"
            onChange={handleChange}
            placeholder="Enter a mobile number"
          />
          <br></br><br></br>
          <div className="forms">
          Already a customer <Link to={"/OLogin"}><b className="hover">SignIn</b></Link>
        </div>
        
           <br></br>
          <button type="submit" className="btn" >
          Submit
        </button><br/><br/>
        </form>
       </div>

      
      
      </div>
    </div>
  )
}
