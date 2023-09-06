import { useState , useEffect } from "react"
import axios from "axios"
import {Base_URL} from "../Config/BaseURL"
import {toast} from 'react-toastify'
import  {useNavigate} from 'react-router-dom'

function Cart(){
    const navigate = useNavigate()

    const [data, setCartData] = useState([])
   
    function getCartCount(){
        let u_id =  localStorage.getItem('auth-id')
        axios.get(Base_URL + '/get-cart-with-products' , {params : {u_id : u_id} }).then((res)=>{
            console.log(res.data.data)
            setCartData(res.data.data)
        }).catch((err)=>{
          setCartData([])
  
        })
      }
  
  
      useEffect(()=>{
        getCartCount()
      },[])

      const incre= (item) =>{
        axios.post(Base_URL + '/update-cart-quantity' , {c_id : item._id , type : "INCRE"}).then((res)=>{
          toast.success(res.data.message)
          window.location.reload()
        }).catch((err)=>{
          toast.error(err.response.data.message)
        })
          
      
      }

      const decre = (item) =>{

        axios.post(Base_URL + '/update-cart-quantity' , {c_id : item._id , type : "DECRE"}).then((res)=>{
          toast.success(res.data.message)
          window.location.reload()
        }).catch((err)=>{
          toast.error(err.response.data.message)
        })
      
      }
      const removeItem = (item) =>{
        axios.get(Base_URL + '/remove-cart-item' , {params : {c_id : item._id}}).then((res)=>{
          toast.success(res.data.message)
          window.location.reload()
        }).catch((err)=>{
          toast.error(err.response.data.message)
        })
      
      
      }
      const calculateSubtotal = () =>{

        var temp   =  data;
        var subt = 0
      
        for(let i = 0 ; i < temp.length ; i++)
        {
            subt =  subt + (Number(temp[i].pro_data.price)  - (Number(temp[i].pro_data.discount) / 100) * Number(temp[i].pro_data.price))
        }
      
        console.log(subt)
        return subt
      
      }
  

    return(
        <>
        {Array.isArray(data) && data.length > 0 ?
          <>
        <div style={{width:'100%',margin:'auto'}} className="container">
          <div className="row">
            <div className="col-8">
        {Array.isArray(data) && data.length > 0 ?
       <>
       {data.map((el,i)=>(
           <div className="card" style={{width : "18rem"}}>
           <img className="card-img-top" src={el.pro_data.image} alt="Card image cap"/>
           <div className="card-body">
             <h5 className="card-title">{el.pro_data.p_name}</h5>
             <p className="card-text"><span style={{color:'red' , fontWeight : "bold"  , fontSize : "20px"}} >{`-${el.pro_data.discount}%`}</span><span style={{marginLeft : 20 ,fontSize:20}} >&#x20B9;</span>{ ( el.pro_data.price  - (el.pro_data.discount / 100) * el.pro_data.price) }<span></span></p>
             <p className="card-text"> M.R.P. <span>&#x20B9;</span>  <del>{el.pro_data.price}</del></p>
              <button   onClick={()=>{decre(el)}} className="btn btn-danger">-</button>
              <input style={{textAlign:'center' ,width : "20%" ,  height:"35px" ,marginLeft : 1 ,marginRight:1}} disabled={true} value={el.quantity}/>
              <button onClick={()=>{incre(el)}}  className="btn btn-success">+</button>
             {/* <a onClick={()=>{handleViewMore(el)}} className="btn btn-primary" style={{marginRight:10}}>View More</a> */}
             {/* <button  disabled={el.disable == true ? true : false} onClick={()=>{addToCart(el)}} className="btn btn-success">{  el.disable == true ? "Already Aded" : 'Add To Cart'}</button> */}
             <p className="card-text"><a  onClick={()=> removeItem(el)} className="btn btn-danger"  style={{marginRight : 10 , marginTop  : 10}} >Remove Product</a> </p>
           </div>
         </div>
       ))}
           </>: null }
        </div>
        <div className ="col-4">
        <div className="card" style={{width:'18rem'}}>
          <div className="card-body">
            <p className="card-text"><i className="fa fa-circle-check" style={{fontSize : 20 , color:"green"  ,marginRight : 5}}></i>Your order is eligible for FREE Delivery. Select this option at checkout. Details</p>
              <h5 style={{fontSize:15}} className="card-title">Subtotal : ( {`${data.length} Items`} : {calculateSubtotal()} )</h5>
            <a  onClick={()=>navigate('/checkout' , {state:  data})} className="btn btn-primary"  style={{borderRadius : 10 , backgroundColor : "#F7CA00" ,  width : "100%"}}>Proceed to Checkout</a>
          </div>
        </div>
        </div>
      </div>
      </div>
      
</>

: <h1 style={{textAlign : "center"}}>No Items in Cart</h1> }
       
       </>
    )

}

export default Cart