import BASE_URL from '../services/baseurl';
import { commonReq } from './commonReq';


// employee register
export const registerEmployee = async (body, headers) => {
    return commonReq('POST', `${BASE_URL}/employees/register`, body, headers)
}

// get employee
export const allEmpData = async (uname) => {
    return commonReq('GET', `${BASE_URL}/employees/getAllData?search=${uname}`, "")
}

// get userById
export const userById = async (userId) => {
    return commonReq('GET', `${BASE_URL}/view/${userId}`, "")
}

// delete
export const deleteUser = async (userId) => {
    return commonReq('DELETE', `${BASE_URL}/employee/delete/${userId}`, {})
}