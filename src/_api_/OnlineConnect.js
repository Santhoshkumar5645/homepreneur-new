import axios from "axios";
import { REACT_APP_API_URL } from "../Utility/constant";

const headers = {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
}
var baseUrl = REACT_APP_API_URL;

class OnlineConnect {
    static GetMethod = async (url) => {
        const connectUrl = baseUrl + url;
        try {
            const response = await axios.get(connectUrl, { headers })
            return response
        } catch (error) {
            return error
        }
    }
    static PostMothod = async (url, payload, image) => {
            const multipartHeader = {
               
                "Content-Type": "multipart/form-data",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            }

            const headerData = image? multipartHeader : headers

        const connectUrl = baseUrl + url;
        try {
            const response = await axios.post(connectUrl, payload, { headerData  })
            return response
        } catch (error) {
            return error
        }
    }
}

export default OnlineConnect