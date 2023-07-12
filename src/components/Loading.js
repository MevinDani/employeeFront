import React from 'react'
import Spinner from 'react-bootstrap/Spinner';


function Loading() {
    return (
        <div className='d-flex align-items-center' style={{ marginLeft: '100px' }}>
            <span>Loading</span>
            <Spinner animation="border" variant="warning" />
        </div>
    )
}

export default Loading