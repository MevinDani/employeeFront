import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import Tables from './Table';
import Loading from './Loading';


function Home() {
    const [spin, setspin] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setspin(false)
        }, 1000)
    }, [])
    return (
        <div>
            <div className='d-flex align-items-center justify-content-between'>
                <form action="" className='p-3 m-5'>
                    <input type="text" />
                    <Button variant="info" className='m-2'>
                        Search <i class="fa-solid fa-magnifying-glass"></i>
                    </Button>{' '}
                </form>
                <Link to={'add'}>
                    <Button variant="info" className='m-5'>Add <i class="fa-solid fa-user-plus"></i></Button>{' '}
                </Link>
            </div>
            {
                spin ?
                    <Loading></Loading>
                    :
                    <Tables></Tables>
            }
        </div>
    )
}

export default Home