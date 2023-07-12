import React from 'react'
import '../App.css'

function Edit() {
  return (
    <div class="container mb-3">
      <div className='d-flex justify-content-center mt-3'><h2 style={{ color: 'white' }}>Edit Employee Details</h2></div>
      <form className='addEditForm'>
        <div className='d-flex justify-content-center mt-3'>
          <img src="https://i.postimg.cc/gJMWFZFq/pngwing-com-3.png" alt="" style={{ height: '100px', width: '100px', borderRadius: '50%', backgroundColor: 'rgb(255, 78, 146)' }} />
        </div>
        <div className='d-flex justify-content-around align-items-center m-4'>
          <div class="form-group">
            <label for="firstName">First Name:</label>
            <input type="text" class="form-control" id="firstName" placeholder="Enter first name" required></input>
          </div>
          <div class="form-group">
            <label for="lastName">Last Name:</label>
            <input type="text" class="form-control" id="lastName" placeholder="Enter last name" required></input>
          </div>
        </div>
        <div className='d-flex justify-content-around align-items-center m-4'>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email" required></input>
          </div>
          <div class="form-group">
            <label for="mobile">Mobile No:</label>
            <input type="tel" class="form-control" id="mobile" placeholder="Enter mobile number" required></input>
          </div>
        </div>
        <div className='d-flex justify-content-around align-items-center m-4'>
          <div class="form-group">
            <label for="gender">Gender:</label>
            <select class="form-control" id="gender" required>
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="form-group">
            <label for="employeeStatus">Employee Status:</label>
            <select class="form-control" id="employeeStatus" required>
              <option value="">Select employee status</option>
              <option value="fullTime">Full Time</option>
              <option value="partTime">Part Time</option>
              <option value="contractor">Contractor</option>
            </select>
          </div>
        </div>
        <div className='d-flex justify-content-around align-items-center m-4'>
          <div class="form-group">
            <label for="profilePic">Choose Profile Picture:</label><br />
            <input type="file" class="form-control-file" id="profilePic"></input>
          </div>
          <div class="form-group">
            <label for="location">Employee Location:</label>
            <input type="text" class="form-control" id="location" placeholder="Enter employee location" required></input>
          </div>
        </div>
        <div className='d-flex justify-content-center mb-3'><button type="submit" class="btn btn-primary">Edit</button></div>
      </form>
    </div>

  )
}

export default Edit