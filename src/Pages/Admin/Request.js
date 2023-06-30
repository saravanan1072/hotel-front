import React, { useEffect, useState } from 'react'
 import axios from 'axios';
import Navbar from './Navbar'
import {  useDispatch, useSelector } from 'react-redux'
import { clear } from '../../Utility/Slice';
export default function Request() {
  const [data,setData]=useState(false)
  const dispatch=useDispatch()
    const state=useSelector((state)=>state.reducer1)
   useEffect(()=>{

    setData(state.toggle)
   },[state])
    const url="https://hotel-backend-enam.onrender.com/ownerData";
    const handle=async()=>{
       await axios.post(url,state)
  .then((res)=>{console.log(res)})
  .catch((err)=>{console.log(err);})
dispatch(clear())

    }
    
  return (
    <div>
         <Navbar/>

         <div className='center'>
   <div>
   {data ?<table border={1}>
        <tr>
          <th>Name</th>
          <th>HotelName</th>
          <th>Address</th>
          <th>Price</th>
          <th>Request</th>
        </tr>
        <tr>
        <td>{state?.name}</td>
          <td>{state?.data?.hotelName}</td>
          <td>{state?.data?.address}</td>
          <td>{state?.data?.price}</td>
          <td> <button onClick={handle} className='btn'>Approve</button>   </td>
        </tr>


      </table>:<h1 style={{textAlign:"center"}}>No records available</h1>}
   </div>
    </div>
    
       
    </div>
  )
}
