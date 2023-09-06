



function Contacts(){


    return (
        <>
         <div class="form-group">
        <div style={{  width:'80%' ,  marginTop:'50px',marginLeft:'50px'}}>
    <div class="form-group">
      <label for="exampleFormControlInput1">Email Address</label>
      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="abc@xyz.com" />
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">Primary Mobile Number</label>
      <input type="mobile" class="form-control" id="exampleFormControlInput1" placeholder="+91-XXXXXXXXXX" />
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">Alternate Mobile.</label>
      <input type="mobile" class="form-control" id="exampleFormControlInput1" placeholder="+91-XXXXXXXXXX" />
    </div>
    </div>
    </div>
        
        </>
    )
}

export default Contacts;