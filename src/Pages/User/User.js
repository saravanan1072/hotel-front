import axios from 'axios';
import logo from '../../Images/t.jpg'

import React, { useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { login } from './Ulogin';
export default function User() {

  const [data,setData]=useState();
    const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

    const navigate=useNavigate()
    
    useEffect(()=>{
      axios.get("https://hotel-backend-enam.onrender.com/getdata").then((res)=>{
        console.log(res.data);
        setData(res.data)

      }).catch((err)=>console.log(err))
    },[])

      const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredItems = data?.result?.filter((item) =>
      item.name?.toLowerCase().includes(query) ||
      item.hotelName?.toLowerCase().includes(query) ||
      item.address?.toLowerCase().includes(query) 
      // item.price?.includes(query)
    );
    setFilteredData(filteredItems);
  };



 
    const handle=async(item)=>{
      navigate('/user/book',{state:{item,login}})

     
      
     


  }
  return (
  <>
   <div className='nav-user'>
  

   
   <div className='nav-user-right'>
   
   <ol>
   <img src={logo} className='user-logo' alt='logo'/>
      <li><input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
      /></li> 

      <li>Welcome <b style={{fontSize:"28px"}}>{login}</b></li>
      <li><i className="fa-solid fa-phone"></i> <b>0124-6201611 <br/><p>Call us to Book now</p></b></li>
     <Link to='/'> <li className='log'>Log out</li></Link>
    </ol>
   </div>
   </div>
    <hr/>

   

  <div>
  {filteredData.length >0 ?  
  <div className="fle">
    {filteredData.map((item) => {
         return (
           <div className="child " key={item.id}>
             <img className="child-image-size" src={item.image} alt="images" />
             <br />
            
               <b className="head">{item.hotelName} </b> 
             
             <br />
            
               <b className="addresss">{item.address} </b> 
            
             <br />

             <div className='block'>         
             <span className="price">
               <b className='price-title' >Price  </b> 
               <i className="fa-solid fa-indian-rupee-sign"></i>
               <b className="discount-price" >{`${item.price} `}</b>
             </span>
             <br /> <br/> 
             <button className="add-to-cart" onClick={()=>handle(item)} >book</button>

             </div>
             
           </div>
         );
       })} 
       </div> : <div className="fle">
       {data?.result?.map((item) => {
         return (
           <div className="child " key={item.id}>
             <img className="child-image-size" src={item.image} alt="images" />
             <br />
            
               <b className="head">{item.hotelName} </b> 
             
             <br />
            
               <b className="addresss">{item.address} </b> 
            
             <br />

             <div className='block'>         
             <span className="price">
               <b className='price-title' >Price  </b> 
               <i className="fa-solid fa-indian-rupee-sign"></i>
               <b className="discount-price" >{`${item.price} `}</b>
             </span>
             <br /> <br/> 
             <button className="add-to-cart" onClick={()=>handle(item)}>book</button>

             </div>
             
           </div>
         );
       })}
     </div>
  
       }


      
  </div>
    
     



  </>
   

  )
}
















