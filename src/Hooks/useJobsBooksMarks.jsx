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
        console.log(response);
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
  };
  console.log(userEroor);

  return [handleBookMark];
};

export default useJobsBooksMarks;
