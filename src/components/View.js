import React, { useEffect, useState } from 'react'
import { userById } from '../services/allapi'
import { useParams } from 'react-router-dom';
import BASE_URL from '../services/baseurl';

function View({ employee }) {

    const params = useParams()
    // console.log(params);

    const [user, setUser] = useState({})

    const profile = async () => {
        const { data } = await userById(params.id)
        setUser(data)
    }

    const strongStyle = {
        color: "rgb(255, 78, 146)"
    }

    console.log(user);

    useEffect(() => {
        profile()
    }, [])
    return (
        <div className="card d-flex flex-column align-items-center mt-5">
            {
                user ? <>
                    <div className="card-body addEditForm d-flex flex-column align-items-center" style={{ color: 'white', width: '80%', }}>
                        <img src={`${BASE_URL}/uploads/${user.profile}`} className="card-img-top" alt="Employee Profile" style={{ height: '200px', width: '200px', borderRadius: '50%', backgroundColor: 'rgb(255, 78, 146)' }} />
                        <h5 className="card-title">{user.firstName} {user.lastName}</h5>
                        <p className="card-text">
                            <p>Email: <strong>{user.email}</strong></p>
                        </p>
                        <p className="card-text">
                            <p>Mobile No:<strong>+91 {user.mobile}</strong></p>
                        </p>
                        <p className="card-text">
                            <p>Gender: <strong>{user.gender}</strong> </p>
                        </p>
                        <p className="card-text">
                            <p>Employee Status: <strong>{user.status}</strong></p>
                        </p>
                        <p className="card-text">
                            <p>Location: <strong>{user.location}</strong></p>
                        </p>
                    </div>

                </> : ""

            }
        </div>
    )
}

export default View