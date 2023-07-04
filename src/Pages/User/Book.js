import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import $ from 'jquery'
import axios from 'axios'
export default function Book() {
    const [book,setBook]=useState({
        checkInDate:"",
        checkOutDate:""

    })
    const [toggle,setToggle]=useState(true)

    const handleChange = (e) => {
  
      setBook({ ...book, [e.target.name]: e.target.value });
    };
    const navigate=useNavigate();
    const location=useLocation();

    const check=async(hotelName)=>{
        const url="https://hotel-backend-enam.onrender.com/check";
    
       axios.post(url,{book,hotelName})
        .then((res)=>{
          setToggle(res.data.result)
          console.log(res)
          
          alert(res.data.msg)
        
        })
        .then((err)=>console.log(err))
    
      }

      const reserveDetail=async(hotelName,name,price)=>{
        const url="https://hotel-backend-enam.onrender.com/reservation";
    
       await axios.post(url,{book,hotelName,name,price})
         .then((res)=>{
           console.log(res)
           alert(res.data.msg)
         
         })
         .then((err)=>console.log(err))

      }

    const p=async(price,hotelName,name)=>{
   

      var orderId ;
    $(document).ready(function(){
        var settings = {
      "url": "https://hotel-backend-enam.onrender.com/create/order",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/json"
      },
      "data": JSON.stringify({
        "amount": price*100
      }),
    };
    
    
    //creates new orderId everytime
    $.ajax(settings).done(function (response) {
    
      orderId=response.orderId;
      console.log(orderId);
      $("button").show();
    });
    });
    
    
    document.getElementById('rzp-button1').onclick = function(e){
     
      var options = {
        "key": "rzp_test_Hk1Cj8n9Wbk9zP", // Enter the Key ID generated from the Dashboard
        "amount": price*100 , // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "CENTRO L E O N",
        "description": "Test Transaction",
        "image": "https://ubiquitous-jalebi-68f275.netlify.app/static/media/t.a2ffebced3bddb9b59c8.jpg",
        "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler":async function (response){
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            // alert(response.razorpay_signature)
         
          await reserveDetail(hotelName,name,price)
            navigate('/user')
    
            var settings = {
              "url": "https://hotel-backend-enam.onrender.com/api/payment/verify",
              "method": "POST",
              "timeout": 0,
              "headers": {
                "Content-Type": "application/json"
              },
              "data": JSON.stringify({response}),
            }
       
    //creates new orderId everytime
    $.ajax(settings).done(function (response) {
    
      //  alert(JSON.stringify(response))
    
    }) },
    
    "theme": {
      "color": "#3399cc"
    }
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response){
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();
    }
    }

    return (
    <div>
    
        <h2 className='book-title'>BOOKING PAGE</h2>

        <div className='book-container'>
            <img className='book-img' src={location.state?.item.image} alt=''/>

            <div className='book-content'>
                <p className='one'>{location.state?.item.hotelName}</p>
                <p className='two'>{location.state?.item.address}</p>
              
                <p> <label htmlFor='checkin'>checkedIn : </label> <input type='date' id='checkin'  value={book.checkInDate} name="checkInDate" onChange={handleChange} required/> <br/>
                <label htmlFor='checkout'>checkedOut : </label> <input type='date' id='chechout' value={book.checkOutDate} name="checkOutDate"  onChange={handleChange} required/>
                <br/> <br/>
                <button className="btn btn2" onClick={()=>check(location.state?.item.hotelName,)}>Check Availability</button></p>
               {toggle ?
                <div>   <p className='three'>status :<b className='third-one'> Active</b></p>
                <p className='four'>Alcohol Not Allowed</p>
                <p className='five'><i className="fa-solid fa-wifi"></i><span> Free Wife</span>  &nbsp; &nbsp; &nbsp;<i className="fa-solid fa-tv"></i> TV</p>
                <p><i className="fa-solid fa-indian-rupee-sign"></i> {location.state?.item.price}</p>
                <button id="rzp-button1" onClick={()=>p(location.state?.item.price,location.state?.item.hotelName,location.state?.login)}  className='btn'>Payment</button>  &nbsp; &nbsp;<button onClick={()=>navigate("/user")} className='btn'>Back</button> </div> 
                 :
                 <div>  <p className='three'>status :<b className='third-one'> Not available</b></p>
                 <p className='four'>Alcohol Not Allowed</p>
                 <p className='five'><i className="fa-solid fa-wifi"></i><span> Free Wife</span>  &nbsp; &nbsp; &nbsp;<i className="fa-solid fa-tv"></i> TV</p>
                 <p><i className="fa-solid fa-indian-rupee-sign"></i> {location.state?.item.price}</p>
                 <button id="rzp-button1"disabled onClick={()=>p(location.state?.item.price,location.state?.item.hotelName,location.state?.login)}  className='btn'>Payment</button>  &nbsp; &nbsp;<button onClick={()=>navigate("/user")} className='btn'>Back</button ></div>}
            </div>

        </div>
        <div className='Description'>
            <p className='Description-title'>Description</p>
            <ul>
                <li>Only Indian nationals are allowed</li>
                <li>Couples are welcome</li>
                <li>Guest need valid address and ID proof with a different city than Bangalore</li>
                <li>As a complimentary benefit, your stay is now insured by Acko.</li>
                <li>This hotel is serviced under the trade name of Hotel subha Residency as per quality standards of OYO</li>
            </ul>
        </div>
    </div>
  )
}
