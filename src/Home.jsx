import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <nav class="navbar nav1">
                        <div className='col-lg-6'>

                        </div>
                        <div className='col-lg-6 navlogbt'>
                            <button className='btn btn-danger' >
                                Login
                            </button>
                        </div>
                    </nav>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div>
                            <Link to={"/create"} className='btn btn-primary addtask'>Add Task</Link>
                        </div>
                    </div>
                    <div className='row homenav2'>
                        <div className=''>
                            <div className='d-flex' >
                                <h6 className='s1'>
                                    Search :
                                </h6>
                                <input className='s1' type="search" placeholder='Search...' />
                            </div>
                            <div className='d-flex '>
                                <h6 className='s2 ' >Sort By :</h6>
                                <select name="type">
                                    <option value="reacent">Reacent</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='content d-flex'>
                        <div className='col-lg-4 cls'>
                            <div className='contenthd'>
                                <h5 style={{
                                    padding: "5px"
                                }}>TODO</h5>
                            </div>
                            <div class="card">
                                <h6 class="card-header" >Task1</h6>
                                <div class="card-body">
                                    <h6 class="card-title">Description</h6>
                                    <p class="card-text">craeted date , time </p>
                                    <div style={{
                                        paddingLeft: "100px"
                                    }}>
                                        <button class="btn btn-danger bts">Delete</button>
                                        <button class="btn btn-secondary bts">Edit</button>
                                        <button class="btn btn-primary bts">Veiw Details</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-4 cls'>
                            <div className='contenthd'>
                                <h5 style={{
                                    padding: "5px"
                                }}>IN PROCESS</h5>
                            </div>
                            <div class="card">
                                <h6 class="card-header" >Task1</h6>
                                <div class="card-body">
                                    <h6 class="card-title">Description</h6>
                                    <p class="card-text">craeted date , time </p>
                                    <div style={{
                                        paddingLeft: "100px"
                                    }}>
                                        <button class="btn btn-danger bts">Delete</button>
                                        <button class="btn btn-secondary bts">Edit</button>
                                        <button class="btn btn-primary bts">Veiw Details</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-4 cls'>
                            <div className='contenthd'>
                                <h5 style={{
                                    padding: "5px"
                                }}>COMPLETED</h5>
                            </div>
                            <div class="card">
                                <h6 class="card-header" >Task1</h6>
                                <div class="card-body">
                                    <h6 class="card-title">Description</h6>
                                    <p class="card-text">craeted date , time </p>
                                    <div style={{
                                        paddingLeft: "100px"
                                    }}>
                                        <button class="btn btn-danger bts">Delete</button>
                                        <button class="btn btn-secondary bts">Edit</button>
                                        <button class="btn btn-primary bts">Veiw Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Home
