import axios from "axios"

// basic structure for all api
export const commonReq = async (method, url, body, header) => {
    let config = {
        method,
        url,
        headers: header ? header : 'application/json',
        data: body
    }

    return axios(config).then(response => {
        // console.log(response);
        return response
    }).catch(error => {
        console.log(error);
        return error
    })
}

// export default commonReq