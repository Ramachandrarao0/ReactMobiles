import { WidthFull } from '@mui/icons-material'
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
         <div className="justify-content-center align-items-center w-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", position: "fixed", backgroundSize: "cover",  height: "100vh"}}>
            
            <div className='p-5 m-5 w-50 'style={{height:'90vh'}}>
            <h2>Welcome Back</h2>
            <form action="">
                <label htmlFor="">Enter your User-Id/Email</label>
                <input type="text" className='form-control' />
            
                <label htmlFor="">Password</label>
                <input type="password" className='form-control'/><br />
                <Link to='/dashboard'><input type="button"  className=' btn btn-outline-primary ' value='Login'/></Link>
                <br />
                <h5 className='text-center'><small>not a member</small> <Link to='/signup'>RegisterNow</Link></h5>
            </form>
            
            </div>
           
        </div>  
      
    </div>
  )
}

export default Login
