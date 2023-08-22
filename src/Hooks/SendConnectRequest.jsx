import Swal from "sweetalert2";
import useAxioSequre from "./useAxiosSequre";

const SendConnectRequest = () => {

  const [axiosSequre] = useAxioSequre();

  const connectRequest = (userconnect) => {
    axiosSequre.post('/connectrequest', userconnect)
      .then(data => {
      if (data?.data?.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Send Connect Request",
          timer: 1500,
        });
      }
    })
  };

  return [connectRequest];
};

export default SendConnectRequest;
