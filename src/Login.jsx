import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <div className='container-fluid'>
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
                <div className='col-lg-6 mt-5'>
                    <h3 className='loghead'>Login</h3>
                    <form className='login'>
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder='Email' />
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder='Password' />
                        </div>
                        <Link type="submit" class="btn btn-primary" style={
                            {
                                width: "100% "
                            }
                        } to={"/home"}>Login
                        </Link>
                        <div className='signup' style={{
                            paddingLeft: "25%",
                            paddingTop: "30px"
                        }}>
                            <h6 >Dont't have an account?</h6>
                            <Link to={"/signup"}>Signup</Link>
                        </div>
                        <div className='signupbt'>
                            <button className='btn btn-primary'>Login with Google</button>
                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}

export default Login
