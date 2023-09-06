import AuthRouting from "./AuthRouting";
import AllRouting from "./AllRouting";
import { useState } from "react";




function CombineRouting({countOfCart}){

    const [auth , SetAuth ] = useState(false)
   

return(
    <>
      { !localStorage.getItem('auth-id')  ?  <AuthRouting/> : <AllRouting  countOfCart = {countOfCart} />  }
    </>


)


}

export default CombineRouting