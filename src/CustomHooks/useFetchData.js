import { useState, useEffect } from "react";
import { ApiCall } from "../_api_/Api";
import { REACT_APP_API_URL } from "../Utility/constant";
import { toast } from "react-toastify";

function useFetchData(url, method, payload, id, flag, MakeaCall) {
  const [data, setData] = useState(null); //For Data setting
  const [loading, setLoading] = useState(false); //For Loading Purpose
  const [error, setError] = useState(null); //For Error Setting

  const baseUrl = url; //base url

  useEffect((url) => {
  
    if(MakeaCall){
      console.log('hai triggered')
      setLoading(true);
      async function loadData() {
        try {
          const dataGet = await ApiCall.getApiDetails(baseUrl, method, payload, flag);
          setData(dataGet.data);
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      }
      loadData();
    }
  }, [url, id]);


  //Refetch used For Onclick or Triger Event Call Function
  const refetch = async (url, method, dataGive, flag) => {
    try {
      setLoading(true)
      const dataGet = await ApiCall.getApiDetails(url, method, dataGive, flag);
      setLoading(false)

      if (dataGet.data) {
        return dataGet.data
      } else {
        console.log(dataGet)
        toast.error(dataGet.response.data.error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        return dataGet;
      }

    } catch (err) {
      setLoading(false)

    }

  };

  return { data, loading, error, refetch };
}

export default useFetchData;
