import { useState } from 'react'
import '../Styles/Login.css'
import { Link , useNavigate } from 'react-router-dom'
import { Base_URL } from '../Config/BaseURL'
import  axios  from 'axios'
import { toast } from 'react-toastify'

function Register(){
    const navigate = useNavigate()

    const [values , setValues] =  useState({
        name: "",
        mobile:"",
        email : "",
        password : "",
        address: "",
        gender:"Male"

    })

    function handleInputs(e){
        setValues({...values , [e.target.name] : e.target.value})
    }
    
    function handleSubmit(){
        var reg_mobile  =  /^[6-9]\d{9}$/
        var ref_email  =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if(values.name.trim() == "" || values.name.trim().length == 1)
        {
            toast.error('Please Enter Your Name')
        }
        else if(!reg_mobile.test(values.mobile)){
            toast.error('Pelase Enter a valid mobile Number')
            
        }
        else if(!ref_email.test(values.email))
        {
            toast.error('Pelase Enter a valid Email')

        }
        else if(values.address.trim() == "" || values.address.trim().length == 1){
            toast.error('Pelase Enter a valid Address')

        }
        else if(!values.gender){
            toast.error('Pelase Select Gender')


        }
        else{
            axios.post(Base_URL + '/add-user' , values).then((res)=>{
                console.log(res)
                toast.success(res.data.message)
                navigate('/login')

            }).catch((err)=>{
                console.log(err)
                toast.error(err.response.data.message)

            })

        }
    }

    
    function handleGenderSelect(e){
        setValues({...values ,  ['gender'] : e.target.value})
 
     }
 


    return (
        <>
             <div className="container">
           {/* <form> */}
  <div className="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" name='name' onChange={handleInputs} className="form-control" id="exampleInputEmail1" placeholder="Enter Name"/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email Address</label>
    <input type="email" name='email' onChange={handleInputs} className="form-control" id="exampleInputEmail1"  placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Mobile</label>
    <input type="number" name='mobile' onChange={handleInputs}className="form-control" id="exampleInputEmail1" placeholder="Enter Mobile Number"/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Address</label>
    <input type="text" name='address' onChange={handleInputs}className="form-control" id="exampleInputEmail1" placeholder="Enter Your Adderess"/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Gender</label>
    <select  onChange={handleGenderSelect} className="form-control">
  <option value={'male'}>Male</option>
  <option value={'female'} >Female</option>
</select>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="text" name='password'  onChange={handleInputs} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group form-check">
    <h5> Already have an account <Link  to='/login'>Login Here</Link> </h5>
  </div>
  <button type="submit"  onClick={handleSubmit}  className="btn btn-primary">Submit</button>
 {/* </form> */}
</div>
        </>
    )

}




export default Register