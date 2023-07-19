import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import Tables from './Table';
import Loading from './Loading';
import { registerContext } from './ContextShare';
import Alert from 'react-bootstrap/Alert';
import { allEmpData, deleteUser } from '../services/allapi';


function Home() {

    const { registerData, setRegisterData } = useContext(registerContext)
    const [spin, setspin] = useState(true)
    // state to store search
    const [uname, setUname] = useState('')
    // console.log(uname);
    // state to store all employee data
    const [allEmployee, setAllEmployee] = useState([])

    const getEmpData = async () => {
        const allData = await allEmpData(uname)
        console.log(allData.data);
        setAllEmployee(allData.data)
    }

    const deleteEmployee = async (id) => {
        await deleteUser(id)
        getEmpData()
    }

    useEffect(() => {
        getEmpData()
        setTimeout(() => {
            setspin(false)
        }, 1000)
    }, [uname])

    return (
        <div>

            {
                registerData ? <Alert key='success' variant='success' onClose={() => setRegisterData('')} dismissible>
                    {registerData.firstName} is registered successfully
                </Alert> : ''
            }

            <div>
                <div className='d-flex align-items-center justify-content-between'>
                    <form action="" className='p-3 m-5'>
                        <input onChange={e => setUname((e.target.value).trim())} type="text" />
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
                        <Tables displayData={allEmployee} removeEmp={deleteEmployee}></Tables>
                    // removeEmp={deleteEmployee}
                }
            </div>
        </div>
    )
}

export default Home