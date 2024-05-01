 import React, { useState } from "react";

const Contact = () => {

    const [data, setData] = useState({
        fullname : "",
        phone : "",
        email : "",
        message : "",
    });

    const inputEvent = (event) => {
      const { name, value} = event.target;

      setData((preVal) => {
        return {
            ...preVal,[name] : value,
        }
      })
    }

    const formSubmit = (e) => {
       e.preventDefault()
       alert(`My name is ${data.fullname}
       My mobile no. ${data.phone} and my Email is ${data.email}`)
    }

    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Contact</h1>
            </div>
            <div className="container contact_div">
                <div>
                    <div className="col-md-6 col-10 mx-auto">
                      
                      <form onSubmit={formSubmit}>
  <div className="form-group">
    <label for="exampleFormControlInput1">Full Name</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Enter your name" />
  </div>
  <div className="form-group mt-3">
    <label for="exampleFormControlInput1">Phone</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent} placeholder="Enter your number" />
  </div>
  <div className="form-group mt-3">
    <label for="exampleFormControlInput1">Email Address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="asd@example.com" />
  </div>
  
  <div className="form-group mt-3">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={inputEvent}></textarea>
  </div>
  <div className="mt-3 gy-4">
  <button className="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
</form>
                      
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;