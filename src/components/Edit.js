import React, { useContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css'
import './add.css'
import { registerEmployee, userById, editEmployee } from '../services/allapi';
import { useNavigate, useParams } from 'react-router-dom'
import { registerContext } from './ContextShare'
import Alert from 'react-bootstrap/Alert';
import BASE_URL from '../services/baseurl';


function Edit() {

  const navigate = useNavigate()

  // state to store api response error message
  const [errorMsg, setErrorMsg] = useState('')

  const params = useParams()
  // console.log(params);

  const [user, setUser] = useState({})

  console.log(user);

  // to get context
  const { registerData, setRegisterData } = useContext(registerContext)

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    gender: "",
    employeeStatus: "",
    profilePic: "",
    location: ""
  })

  const [image, setImage] = useState('')
  const [preview, setPreview] = useState('')

  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image))
    }
  }, [image])
  // console.log(preview);

  const profile = async () => {
    const { data } = await userById(params.id)
    setUser(data)
    setValues({ ...data, [data.id]: data.value })
  }

  useEffect(() => {
    profile()
  }, [])

  console.log(values);


  // fnt to set image
  const setProfile = (e) => {
    // console.log(e.target.files[0]);
    setImage(e.target.files[0])
  }

  // console.log(image);

  // const [focused, setFocused] = useState(false)

  // const handleFocus = (e) => {
  //   setFocused(true)
  //   // console.log(e.target.validity.valid);
  //   // if (e.target.validity.valid) {
  //   //     console.log(e.target.id);
  //   // alert("valid")
  //   // }
  // }

  const handleChange = (e) => {
    e.preventDefault()
    // console.log(e.target);
    setValues({ ...values, [e.target.id]: e.target.value })
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const { firstName, lastName, email, mobile, gender, employeeStatus, location, } = values
    if (firstName === '') {
      toast('FirstName Required')
    } else if (lastName === '') {
      toast('lastName Required')
    } else if (email === '') {
      toast('Email required')
    } else if (mobile === '') {
      toast('Mobile required')
    } else if (gender === '') {
      toast('Gender required')
    } else if (employeeStatus === '') {
      toast('employeeStatus required')
    } else if (location === '') {
      toast('location required')
    } else if (image === '') {
      toast('Profile pic required')
    } else {
      // toast.success("Employee added");
      // api call

      // header data
      const headerConfig = {
        "Content-Type": "multipart/form-data"
      }
      // body data as form data
      // firstName, lastName, email, mobile, gender, employeeStatus, location
      const data = new FormData()
      // add data
      data.append("user_profile", image)
      data.append("firstName", firstName)
      data.append("lastName", lastName)
      data.append("email", email)
      data.append("mobile", mobile)
      data.append("gender", gender)
      data.append("employeeStatus", employeeStatus)
      data.append("location", location)

      console.log(data);

      // api call
      const registerResponse = await editEmployee(params.id, data, headerConfig)
      console.log(registerResponse);

      // update regdata to regContext

      if (registerResponse.status == 200) {
        setRegisterData(registerResponse.data.result)
        setValues({
          ...values,
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          gender: "",
          employeeStatus: "",
          profilePic: "",
          location: ""
        })
        setImage('')
        // redirect to home
        toast.success("Employee added");
        navigate('/')
      } else {
        setErrorMsg(registerResponse.response.data)
      }

      // reset all states

    }
  }


  // console.log(values);
  return (
    <div class="container mb-3">
      {
        errorMsg ? <Alert key='danger' variant='danger' onClose={() => setErrorMsg('')} dismissible>
          {errorMsg},change email
        </Alert> : ''
      }
      <div className='d-flex justify-content-center mt-3'><h2 style={{ color: 'white' }}>Edit Employee Details</h2></div>
      <form className='addEditForm'>
        <div className='d-flex justify-content-center mt-3'>
          {/* <img src={`${BASE_URL}/uploads/${user.profile}`} style={{ height: '200px', width: '200px', borderRadius: '50%', backgroundColor: 'rgb(255, 78, 146)' }} alt="" /> */}
          <img src={preview ? preview : `${BASE_URL}/uploads/${user.profile}`} alt="" style={{ height: '100px', width: '100px', borderRadius: '50%', backgroundColor: 'rgb(255, 78, 146)' }} />
        </div>
        <div className='d-flex justify-content-around align-items-center m-4'>
          <div class="form-group">
            <label for="firstName">First Name:</label>
            <input onChange={handleChange}
              value={values['firstName']}
              // onBlur={handleFocus}
              // focused={focused.toString()}
              // onFocus={() => setFocused(true)}
              // errormessage="username should have atleast 3-16 characters with no special characters"
              // pattern="^[A-Za-z0-9]{3,16}$"
              type="text" class="form-control" id="firstName" placeholder="Enter first name" required
            />
            {/* <span>
                            firstname should have atleast 3-16 characters with no special characters
                        </span> */}
          </div>
          <div class="form-group">
            <label for="lastName">Last Name:</label>
            <input onChange={handleChange}
              value={values['lastName']}
              // onBlur={handleFocus}
              // focused={focused.toString()}
              // onFocus={() => setFocused(true)}
              // errormessage="username should have atleast 3-16 characters with no special characters"
              // pattern="^[A-Za-z0-9]{3,16}$"
              type="text" class="form-control" id="lastName" placeholder="Enter last name" required />
            {/* <span>
                            lastname should have atleast 3-16 characters with no special characters
                        </span> */}
          </div>
        </div>
        <div className='d-flex justify-content-around align-items-center m-4'>
          <div class="form-group">
            <label for="email">Email:</label>
            <input onChange={handleChange}
              value={values['email']}
              // onBlur={handleFocus}
              // focused={focused.toString()}
              // onFocus={() => setFocused(true)}
              // errormessage="email is not valid"
              type="email" class="form-control" id="email" placeholder="Enter email" required />
            {/* <span>
                            email is not valid
                        </span> */}
          </div>
          <div class="form-group">
            <label for="mobile">Mobile No:</label>
            <input onChange={handleChange}
              value={values['mobile']}
              // onBlur={handleFocus}
              // focused={focused.toString()}
              // onFocus={() => setFocused(true)}
              // pattern="[0-9]{10}"
              // errormessage="Please enter a 10-digit mobile number"
              type="tel" class="form-control" id="mobile" placeholder="Enter mobile number" required />
            {/* <span>
                            Mobile number should have 10 numbers
                        </span> */}
          </div>
        </div>
        <div className='d-flex justify-content-around align-items-center m-4'>
          <div class="form-group">
            <label for="gender">Gender:</label>
            <select onChange={handleChange}
              value={values['gender']}
              // onBlur={handleFocus}
              // focused={focused.toString()}
              // onFocus={() => setFocused(true)}
              // errormessage="select gender"
              class="form-control" id="gender" required>
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {/* <span>
                            username should have atleast 3-16 characters with no special characters
                        </span> */}
          </div>
          <div class="form-group">
            <label for="employeeStatus">Employee Status:</label>
            <select onChange={handleChange}
              value={values['status']}
              // onBlur={handleFocus}
              // focused={focused.toString()}
              // onFocus={() => setFocused(true)}
              // errormessage="select employee status"
              class="form-control" id="employeeStatus" required>
              <option>Select</option>
              <option value="active">Active</option>
              <option value="inactive">InActive</option>
            </select>
            {/* <span>
                            username should have atleast 3-16 characters with no special characters
                        </span> */}
          </div>
        </div>
        <div className='d-flex justify-content-around align-items-center m-4'>
          <div class="form-group">
            <label for="profilePic">Choose Profile Picture:</label><br />
            <input
              onChange={setProfile}
              // errormessage="select profile pic"
              type="file" class="form-control-file" id="profilePic" />
            {/* <span>
                            profilepic should be valid
                        </span> */}
          </div>
          <div class="form-group">
            <label for="location">Employee Location:</label>
            <input onChange={handleChange}
              value={values['location']}
              // onBlur={handleFocus}
              // focused={focused.toString()}
              // onFocus={() => setFocused(true)}
              // pattern='[A-Za-z]+'
              // errormessage="select location"
              type="text" class="form-control" id="location" placeholder="Enter employee location" required />
            {/* <span>
                            location should only be alphabets
                        </span> */}
          </div>
        </div>
        <div className='d-flex justify-content-center mb-3'><button onClick={handleFormSubmit} type="submit" class="btn btn-primary">Submit</button></div>
      </form>
      <ToastContainer position='top-center' />
    </div>
  )
}

export default Edit