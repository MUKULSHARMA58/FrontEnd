import { useNavigate } from "react-router-dom"
import '../Styles/Badge.css'


function Navbar({countOfCart}){
  console.log("Hello-Carrt" ,  countOfCart)
    const  navigate = useNavigate()

    
    const handleLogout = () =>{
      localStorage.removeItem('auth-id')
      window.location.reload()
  } 

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <a className="navbar-brand" href="#">Navbar</a> */}
        <a href="#"style={{width:'100x',height:'65px', display:'flex'}}><img src="https://img.freepik.com/premium-vector/abstract-modern-ecommerce-logo-design-colorful-gradient-shopping-bag-logo-template_467913-995.jpg"
          alt="some-image" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className={`nav-item  ${window.location.href.includes('/home') ? 'active' : "" } `}>
        <a style={{cursor:'pointer'}} className="nav-link" onClick={()=>{navigate('/home')}}>Home <span className="sr-only">(current)</span></a>
      </li>
      <li className={`nav-item  ${window.location.href.includes('/about') ? 'active' : "" } `} >
        <a style={{cursor:'pointer'}} className="nav-link" onClick={()=>{navigate('/about')}}>About</a>
      </li>
      <li className={`nav-item  ${window.location.href.includes('/contact') ? 'active' : "" } `}>
        <a style={{cursor:'pointer'}} className="nav-link" onClick={()=>{navigate('/contact')}}>Contacts</a>
      </li>
      <li className={`nav-item  ${window.location.href.includes('/products') ? 'active' : "" } `}>
        <a style={{cursor:'pointer'}} className="nav-link" onClick={()=>{navigate('/products')}}>Products</a>
      </li>
      <li className={`nav-item  ${window.location.href.includes('/my_orders') ? 'active' : "" } `}>
        <a style={{cursor : "pointer"}} className="nav-link" onClick={()=>{navigate('/my_orders')}}>Orders History</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
    <div style={{marginRight : 20}}>
      <i onClick={()=> navigate('/mycart')} className="fa" style={{fontSize:'24px' ,  cursor:'pointer'}}>&#xf07a;</i>
      <span className='badge badge-warning' id='lblCartCount'>{countOfCart}</span>
        </div>
        <div style={{marginRight : 20}}>
          <i  onClick={()=> navigate('/my_profile')} className="fa" style={{fontSize:'24px' , color:'green', cursor:'pointer'}}>&#xf2bd;</i>
        </div>
      {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleLogout}>Logout</button>
    </form>
  </div>
</nav>
    )
}

export default Navbar