import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
  const [taskDetails, setTaskDetails] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let task = await axios.get(`http://localhost:3005/home`);
        setTaskDetails([...task.data]);
        console.log(task.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleEditClick = (task) => {
    setCurrentTask(task);
    setShowEditModal(true);
  };

  const handleViewClick = (task) => {
    setCurrentTask(task);
    setShowViewModal(true);
  };

  const handleEditClose = () => {
    setShowEditModal(false);
    setCurrentTask(null);
  };

  const handleViewClose = () => {
    setShowViewModal(false);
    setCurrentTask(null);
  };

  const handleSave = async () => {
    try {
      const updatedTask = { ...currentTask };
      delete updatedTask._id; // Remove _id field before sending the update request

      await axios.put(`http://localhost:3005/home/${currentTask._id}`, updatedTask);
      const updatedTasks = taskDetails.map((task) =>
        task._id === currentTask._id ? currentTask : task
      );
      setTaskDetails(updatedTasks);
      handleEditClose();
      alert("Task updated successfully!");
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3005/home/${id}`);
      const updatedTasks = taskDetails.filter((task) => task._id !== id);
      setTaskDetails(updatedTasks);
      alert("Task deleted successfully!");
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentTask({ ...currentTask, [name]: value });
  };

  let handlelogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };


  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar nav1">
            <div className="col-lg-6"></div>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={`Hi, ${localStorage.getItem("name")}!`}
              menuVariant="dark"
            >
              <Dropdown.Item className="" to="">
                <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                <Link className="">My Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item className="" onClick={handlelogout}>
                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
              </Dropdown.Item>
            </NavDropdown>
          </nav>
        </div>
        <div className="container">
          <div className="row">
            <div>
              <Link to={"/create"} className="btn btn-primary addtask">
                Add Task
              </Link>
            </div>
          </div>
          <div className="row homenav2">
            <div className="homenav2a">
              <div className="d-flex">
                <h6 className="s1">Search :</h6>
                <input className="s1" type="search" placeholder="Search..." />
              </div>
              <div className="d-flex ">
                <h6 className="s2 ">Sort By :</h6>
                <select name="type">
                  <option value="recent">Recent</option>
                </select>
              </div>
            </div>
          </div>
          <div className="content d-flex">
            <div className="col-lg-4 cls">
              <div className="contenthd">
                <h5
                  style={{
                    padding: "5px",
                  }}
                >
                  TODO
                </h5>
              </div>

              {taskDetails.map((task, index) => (
                <div className="card mt-3" key={index}>
                  <div className="card-body">
                    <h6 className="">Task Name: {task.task}</h6>
                    <h6 className="">Description:</h6>
                    <p className="card-text">
                      Created at: {task.date}
                      <br />
                    </p>
                    <div style={{ paddingLeft: "100px" }}>
                      <button
                        className="btn btn-danger bts"
                        onClick={() => handleDelete(task._id)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-secondary bts"
                        onClick={() => handleEditClick(task)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-primary bts"
                        onClick={() => handleViewClick(task)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Edit Task Modal */}
              <Modal show={showEditModal} onHide={handleEditClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Edit Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {currentTask && (
                    <Form>
                      <Form.Group controlId="formTaskTitle">
                        <Form.Label>Task Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="task"
                          value={currentTask.task}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group controlId="formTaskDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="description"
                          value={currentTask.description}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group controlId="formTaskDate">
                        <Form.Label>Created Date</Form.Label>
                        <Form.Control
                          type="text"
                          name="date"
                          value={currentTask.date}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Form>
                  )}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleEditClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleSave}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>

              {/* View Task Modal */}
              <Modal show={showViewModal} onHide={handleViewClose}>
                <Modal.Header closeButton>
                  <Modal.Title>View Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {currentTask && (
                    <div>
                      <h6>Task Name: {currentTask.task}</h6>
                      <p>Description: {currentTask.description}</p>
                      <p>Created Date: {currentTask.date}</p>
                    </div>
                  )}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleViewClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>

            <div className="col-lg-4 cls">
              <div className="contenthd">
                <h5
                  style={{
                    padding: "5px",
                  }}
                >
                  IN PROCESS
                </h5>
              </div>
              <div className="card">
                <h6 className="card-header">Task1</h6>
                <div className="card-body">
                  <h6 className="card-title">Description</h6>
                  <p className="card-text">created date , time </p>
                  <div
                    style={{
                      paddingLeft: "100px",
                    }}
                  >
                    <button className="btn btn-danger bts">Delete</button>
                    <button className="btn btn-secondary bts">Edit</button>
                    <button className="btn btn-primary bts">View Details</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 cls">
              <div className="contenthd">
                <h5
                  style={{
                    padding: "5px",
                  }}
                >
                  COMPLETED
                </h5>
              </div>
              <div className="card">
                <h6 className="card-header">Task1</h6>
                <div className="card-body">
                  <h6 className="card-title">Description</h6>
                  <p className="card-text">created date , time </p>
                  <div
                    style={{
                      paddingLeft: "100px",
                    }}
                  >
                    <button className="btn btn-danger bts">Delete</button>
                    <button className="btn btn-secondary bts">Edit</button>
                    <button className="btn btn-primary bts">View Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
