import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import axios from 'axios'
export default function Adowner() {
const [state,setState]=useState("")
useEffect(()=>{
axios.get("https://hotel-backend-enam.onrender.com/ownerinfo")
.then((res)=>{
  console.log(res.data)
  setState(res.data)
}
)
},[])

  return (
    <div> 
      <Navbar/>
    <div className='center'>
   <div>
   <table border={1}>
        <tr>
          <th>Name</th>
          <th>E-mail</th>
          <th>Mobile</th>
        </tr>
      {state?.result?.map((item)=>{
        return(
          <tr key={item.id}>
            <td>{item.hotelName}</td>
            <td>{item.email}</td>
            <td>{item.mobile}</td>

          
          </tr>
        )

})}

      </table>
   </div>
    </div>
   
    </div>
  )
}
