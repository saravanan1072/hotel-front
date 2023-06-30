
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
export default function Uregister() {
  const navigate=useNavigate();
  const url="https://hotel-backend-enam.onrender.com/userRegister";
  const [data, setData] = useState({
    firstName: "",
    lastName:"",
    email: "",
    password: "",
    mobile:"",
    file:" "
  });
const handledata=async(e)=>{
  e.preventDefault()
 await axios.post(url,data)
  .then((res)=>alert(res.data.msg))
  .catch((err)=>{console.log(err)})
 
  navigate("/Ulogin")
}
 


  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className="pic2">
      <div className="reg-container">
       <div className="reg-con">
         <h1 style={{textAlign:"center"}}>USER REGISTER FORM</h1>
        <form onSubmit={handledata}>
          <label htmlFor="name">FirstName : </label>
          <input
            required
            type="text"
            id="name"
            value={data.firstName}
            name="firstName"
            onChange={handleChange}
            placeholder="Enter a firstName..."

          />
           <br></br>
           <label htmlFor="lname">LastName : </label>
          <input
            required
            type="text"
            id="lname"
            value={data.lastName}
            name="lastName"
            onChange={handleChange}
            placeholder="Enter a lastName..."
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
          Already a customer <Link to={"/Ulogin"}><b className="hover">SignIn</b></Link>
        </div>
      
           <br></br>
          <button type="submit" className="btn" >
          Submit
        </button>
        <br></br><br></br>
        </form>
       </div>

       
      </div>
    </div>
  )
}
