// import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxioSequre from "./useAxiosSequre";

const useJobsBooksMarks = () => {
  const [userEroor, setUserError] = useState("");
  const [axiosSequre] = useAxioSequre();
  const handleBookMark = (bookMarksData) => {
axiosSequre
  .post("/bookMarkJobs", bookMarksData)
  .then((response) => {
    if (response.data.insertedId) {
      Swal.fire({
        icon: "success",
        title: "Job post successfully",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  })
  .catch((error) => {
    setUserError(error.message);
  });

 // Console log your data for debugging purposes
 console.log("bookMarksData:", bookMarksData);

    
  };

  return [handleBookMark];
};

export default useJobsBooksMarks;
