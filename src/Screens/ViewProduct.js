import {useLocation} from 'react-router-dom';


function ViewProduct(){

    const {state} =  useLocation()
    console.log(state)


return(
    <div className="card" style={{width : "18rem" }}>
    <img className="card-img-top" src={state.image} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">{state.p_name}</h5>
      <p className="card-text"><span style={{color:'red' , fontWeight : "bold"  , fontSize : "20px"}} >{`-${state.discount}%`}</span><span style={{marginLeft : 20 ,fontSize:20}} >&#x20B9;</span>{ ( state.price  - (state.discount / 100) * state.price) }<span></span></p>
      <p className="card-text"> M.R.P. <span>&#x20B9;</span>  <del>{state.price}</del></p>
      
      {/* <a onClick={()=>{handleViewMore(el)}} className="btn btn-primary"  style={{marginRight : 10}} >View More</a> */}
      <a href="#" className="btn btn-success">Add To Cart</a>
    </div>
  </div>
)


}


export default ViewProduct