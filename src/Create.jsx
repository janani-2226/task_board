import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Formik, useFormik } from 'formik';

function Create() {
    const formik = useFormik({
        initialValues: {
            task: "",
            date: ""
        },
        onSubmit(data) {
            console.log(data)
        }

    })


    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className='conatiner-fluid'>
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
                </div>
                <div className='container'>
                    <div className='col-lg-12 createnav2'>
                        <div className='d-flex createnav3' >
                            <h6 className='s1'>
                                Search :
                            </h6>
                            <input type="search" placeholder='Search...' />
                        </div>
                        <div className='d-flex'>
                            <h6 className='s2' >Sort By :</h6>
                            <select name="type">
                                <option value="reacent">Reacent</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-lg-12 createnav4'>
                        <div className='contenthd'>
                            <h5 style={{
                                padding: "5px"
                            }}>TODO</h5>
                        </div>
                        <div className='task' style={{
                            background: "rgb(206, 222, 241)"
                        }}>

                            <h5 class="card-header" >Task</h5>
                            <div class="taskin container">
                                <div className='col-lg-6'>
                                    <input type="text" placeholder='Enter Your Task' className='createin form-control'
                                        name='task'
                                        value={formik.values.task}
                                        onChange={formik.task}
                                    />
                                </div>
                                <div>
                                    <input type="date" className='createin form control'
                                        name='date'
                                        value={formik.values.date}
                                        onChange={formik.date} />
                                </div>
                            </div>
                            <div style={{
                                paddingLeft: "85%",
                                marginTop: "30px"
                            }}>
                                <button type='submit' class="btn btn-danger bts">Add task</button>
                            </div>


                        </div>
                    </div>


                </div>
            </form>
        </>
    )
}

export default Create
