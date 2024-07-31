import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function Signup() {
    return (
        <>
            <div className='conatainer-fluid'>
                <div className='row'>
                    <nav class="navbar nav1">
                        <div className='col-lg-6'>

                        </div>
                        <div className='col-lg-6 logbt'>
                            <button className='btn btn-outline-primary bt'>
                                Login
                            </button>
                            <button className='btn btn-outline-primary bt'>
                                Signup
                            </button>
                        </div>
                    </nav>
                </div>
                <div className='row'>
                    <div>
                        <h5 className='signuphead'>Signup</h5>
                    </div>
                    <div className='col-lg-4 signcontent'>
                        <input type="text" placeholder='First Name' className='form-control in' />
                        <input type="text" placeholder='Last Name'className='form-control in'  />
                        <input type="text" placeholder='Email'className='form-control in'  />
                        <input type="text" placeholder='Password' className='form-control in' />
                        <input type="text" placeholder='Confirm Pasword' className='form-control '  />
                        <button type="submit" class="btn btn-primary" style={
                            {
                                width: "100% "
                            }
                        }>Login
                        </button>
                        <div className='signup' style={{
                            paddingLeft: "25%",
                            paddingTop: "30px"
                        }}>
                            <h6 >Dont't have an account?</h6>
                            <h6>Signup</h6>
                        </div>
                        <div className='signupbt'>
                            <button className='btn btn-primary'>Login with Google</button>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}

export default Signup
