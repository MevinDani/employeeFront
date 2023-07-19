import React from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import BASE_URL from '../services/baseurl';
// import { deleteUser } from '../services/allapi';



function Tables({ displayData, removeEmp }) {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <div className='d-flex flex-column align-items-center'>
            <h3 style={{ color: 'white' }}>List Of Employees</h3>
            <Table striped bordered hover variant="dark" className='w-75'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Full Name</th>
                        <th>E-Mail</th>
                        <th>Mobile</th>
                        <th>Status</th>
                        <th>Profile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        displayData.length > 0 ? displayData.map((i, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{i.firstName} {i.lastName}</td>
                                <td>{i.email}</td>
                                <td>{i.mobile}</td>
                                <td>
                                    <Dropdown>
                                        <Dropdown.Toggle variant={i.status === 'active' ? "success" : "danger"} id="dropdown-basic">
                                            {i.status}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href={`view/${i._id}`}>View  <i class="fa-solid fa-eye fa-beat-fade"></i></Dropdown.Item>
                                            <Dropdown.Item href={`edit/${i._id}`}>Edit  <i class="fa-solid fa-user-pen fa-beat-fade"></i></Dropdown.Item>
                                            <Dropdown.Item href={`delete/${i._id}`}>Delete  <i class="fa-solid fa-trash fa-beat-fade"></i></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    {/* <select className='p-2 bg-dark' name="" id="">
                                        <option value="">{i.status}</option>
                                        <option value="">Active</option>
                                        <option value="">Inactive</option>
                                    </select> */}
                                </td>
                                <td>
                                    <img style={{ height: '50px', borderRadius: '50%', width: '50px' }} src={`${BASE_URL}/uploads/${i.profile}`} alt="" />
                                </td>
                                <td>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            Actions  <i class="fa-solid fa-bars fa-beat-fade"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href={`view/${i._id}`}>View  <i class="fa-solid fa-eye fa-beat-fade"></i></Dropdown.Item>
                                            <Dropdown.Item href={`edit/${i._id}`}>Edit  <i class="fa-solid fa-user-pen fa-beat-fade"></i></Dropdown.Item>
                                            <Dropdown.Item onClick={(e) => removeEmp(i._id)}> Delete <i class="fa-solid fa-trash fa-beat-fade"></i></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    {/* onClick={removeEmp(i._id)} */}
                                </td>
                            </tr>

                        ))
                            : <p>No Employees are present</p>
                    }
                </tbody>
            </Table>
        </div >
    )
}

export default Tables