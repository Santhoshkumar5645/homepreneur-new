import { toast } from "react-toastify";
import OnlineConnect from "./OnlineConnect";

export class ApiCall {

    static getApiDetails = async (url, method, payload, flag) => {
        //If Method Get 
        if (method === "get") {
            const ResponseData = await OnlineConnect.GetMethod(url);
            // console.log(ResponseData.data);
            if (ResponseData.status !== 200) {
                toast.error(ResponseData.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                return ResponseData
            } else {
                return ResponseData;
            }
        }
        else {

            try {
                const ResponseData = await OnlineConnect.PostMothod(url, payload, flag)
                return ResponseData

            } catch (error) {

                if (error.response.status !== 200) {
                    // console.log(ResponseData)
                        toast.error(error.response.data.error.message, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                    } 

                return error;
            }
        }
    }




    }