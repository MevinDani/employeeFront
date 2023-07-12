import BASE_URL from '../services/baseurl';
import { commonReq } from './commonReq';


// employee register
export const registerEmployee = async (body, headers) => {
    return commonReq('POST', `${BASE_URL}/employees/register`, body, headers)
}