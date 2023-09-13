import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import swal from 'sweetalert';

function Contact() {

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const handleForm = (e)=>{
        e.preventDefault();
        console.log(username,password);
        if(username === '' || password === ''){
            // alert('Please enter a username and password')
            swal("Empty fields", "Please fill the required fields", "error")
        } else {
            // alert('Welcome to Dem hotties dev server')
            swal("Successful", "Welcome to Dem hotties dev server", "success")

        }
    }

  return (
    <div>
        <div className='w-50 mx-auto shadow rounded p-3'>
            <h1 className='text-center'>Form</h1>
            <form action="" onSubmit={handleForm}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="passowrd" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button className='btn btn-primary' type='submit'>submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact