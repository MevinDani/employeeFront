import React from 'react'

function View({ employee }) {
    return (
        <div className="card d-flex flex-column align-items-center mt-5">
            <img src='https://i.postimg.cc/gJMWFZFq/pngwing-com-3.png' className="card-img-top" alt="Employee Profile" style={{ height: '200px', width: '200px', borderRadius: '50%', backgroundColor: 'rgb(255, 78, 146)' }} />
            <div className="card-body addEditForm d-flex flex-column align-items-center" style={{ color: 'white', width: '80%', }}>
                <h5 className="card-title">John Vick</h5>
                <p className="card-text">
                    <strong>Email:  </strong>
                    <span>john43@gmail.com</span>
                </p>
                <p className="card-text">
                    <strong>Mobile No:  </strong>
                    <span>78457894754</span>
                </p>
                <p className="card-text">
                    <strong>Gender:  </strong>
                    <span>Male</span>
                </p>
                <p className="card-text">
                    <strong>Employee Status:  </strong>
                    <span>Full time</span>
                </p>
                <p className="card-text">
                    <strong>Location:  </strong>
                    <span>Kochi</span>
                </p>
            </div>
        </div>
    )
}

export default View