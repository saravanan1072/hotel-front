
import { useState } from "react";
import Navbar from './Navbar'
import { name } from "./Login";
import {useDispatch}from 'react-redux'
import {  update } from "../../Utility/Slice";
import { useNavigate } from "react-router-dom";
export default function Owner() {
  const toggle=true;
  const [file,setFile]=useState()
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [data, setData] = useState({
    hotelName: "",
    price: "",
    address:"",
   
  });

  const convertFile=(e)=>{
    console.log(e);
    var reader=new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload=()=>{
      console.log(reader.result);
      setFile(reader.result)
    }
    reader.onerror=error=>{
      console.log("error",error);
    }
  }
 
const handledata=async(e)=>{ 
  e.preventDefault()
  
dispatch(update({data,name,file,toggle}))
alert("Request has been sended sucessfully")
navigate('/owner')


}


  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
  <div>
     <Navbar/>
    <div className="con">
  
    <div className="multiple">
      
     

     <form onSubmit={handledata}>
     <h2>Add a Hotel Name</h2>
         <label htmlFor="name">hotelName : </label>
         <input
           required
           type="text"
           id="name"
           value={data.hotelName}
           name="hotelName"
           onChange={handleChange}
           placeholder="Enter a hotel Name..."

         />
          <br></br>
         
       
         <label htmlFor="price">price : </label>
         <input
           required
           type="number"
           id="price"
          value={data.price}
           name="price"
           onChange={handleChange}
           placeholder="Enter a price here!..."

         />
         <br></br>
         <label htmlFor="image">image : </label>
         <input
           required
           type="file"
           id="image"
          
           onChange={convertFile}
          
         /><br/> <span style={{color:"red"}}>Insert PNG image format</span>
         <br></br>
         <label htmlFor="Address">Address : </label>
         <input
           required
           type="text"
           id="Address"
           value={data.address}
           name="address"
           onChange={handleChange}
           placeholder="Enter a address here...?"
         />
         <br></br><br></br>
         
       
          
         <button type="submit"  className="btn" >
         Submit
       </button><br/><br/>
       </form>
   </div>
    </div>
   
  </div>
  )
}
