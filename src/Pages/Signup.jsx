import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
      <div className="justify-content-center align-items-center w-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", position: "fixed", backgroundSize: "cover",  height: "100vh"}}>

            
            <div className='w-55 p-5 m-5 'style={{height:'90vh'}}>
            <h2>Register Now</h2>
            <form action="">
                <label htmlFor="">Enter your Email</label>
                <input type="email" className='form-control' />
                <br />
                <div className='d-flex  '>
                    <input type="text"className='form-control' placeholder='First Name' />
                    <input type="text" className='form-control' placeholder='Last Name' />
                </div>
                <br />
                <label htmlFor="number"> phone Number</label>
                <input type="nuber" className='form-control'/>
                <label htmlFor="">Password</label>
                <input type="password" className='form-control'/><br />
                <Link to='/'><input type="button"  className=' btn btn-outline-primary ' value='Signup'/></Link>
                
            </form>
            
            </div>
           
        </div>  
    </div>
  )
}

export default Signup
