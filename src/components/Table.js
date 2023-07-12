import React from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';



function Tables() {
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
                    <tr>
                        <td>1</td>
                        <td>Mark Ruff</td>
                        <td>mark@gmail.com</td>
                        <td>+9747581211</td>
                        <td>
                            <select className='p-2 bg-dark' name="" id="">
                                <option value="">Active</option>
                                <option value="">Inactive</option>
                            </select>
                        </td>
                        <td>
                            <img style={{ height: '50px', borderRadius: '50px' }} src="https://i.postimg.cc/FKxQkt68/pngwing-com-2.png" alt="" />
                        </td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Actions  <i class="fa-solid fa-bars fa-beat-fade"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="view/1">View  <i class="fa-solid fa-eye fa-beat-fade"></i></Dropdown.Item>
                                    <Dropdown.Item href="edit/1">Edit  <i class="fa-solid fa-user-pen fa-beat-fade"></i></Dropdown.Item>
                                    <Dropdown.Item href="delete/1">Delete  <i class="fa-solid fa-trash fa-beat-fade"></i></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Tables