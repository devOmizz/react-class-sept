import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function LearnMultipleFrom() {

    const[person, setPerson] = useState({
        username:'',
        password:''
    })

    const handleInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setPerson({...person, [name]:value})
    }
    const handleForm = (e)=>{
        e.preventDefault();
        console.log(person);
    }
  return (
    <div>
        <div className='w-50 mx-auto shadow rounded p-3'>
            <h1 className='text-center'>Form</h1>
            <form action="" onSubmit={handleForm}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='username' value={person.username} onChange={handleInput}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="passowrd" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='password' value={person.password} onChange={handleInput}/>
                </div>
                <button className='btn btn-primary' type='submit'>submit</button>
            </form>
        </div>
    </div>
  )
}

export default LearnMultipleFrom