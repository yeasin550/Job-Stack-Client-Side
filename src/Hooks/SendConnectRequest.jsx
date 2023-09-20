import Swal from "sweetalert2";
import useAxioSequre from "./useAxiosSequre";
import usePostNotification from "./usePostNotification";

const SendConnectRequest = () => {

  const [axiosSequre] = useAxioSequre();
  const [postNotification] = usePostNotification();

  const connectRequest = (userconnect) => {
    const notify = {
      reciveEmail: userconnect?.userEmail,
      sendername: userconnect?.name,
      massage: 'connect request send',
      timeStamp: userconnect?.timeStamp,
      senderimage: userconnect?.image,
      senderEmail: userconnect?.requestemail,
    }

    axiosSequre.post('/connectrequest', userconnect)
      .then(data => {
        if (data?.data?.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Send Connect Request",
            timer: 1500,
          });
          postNotification(notify)
        }
      })
  };

  return [connectRequest];
};

export default SendConnectRequest;
