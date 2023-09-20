import { useContext, useState } from "react";
import Swal from "sweetalert2";
import useAxioSequre from "./useAxiosSequre";
import { AuthContext } from "../Providers/AuthProvider";
// import { data } from "autoprefixer";

const useJobsBooksMarks = () => {
  const {user} = useContext(AuthContext)
  const [userEroor, setUserError] = useState("");
  const [axiosSequre] = useAxioSequre();

  const handleBookMark = (bookMarksData) => {
    const {
      companyName,
      email,
      image,
      jobCategory,
      jobDescription,
      jobTitle,
      location,
      salary,
      userPhoto,
      workplace,
    } = bookMarksData;
    const postbookMark = {
      companyName,
      email,
      image,
      jobCategory,
      jobDescription,
      jobTitle,
      location,
      salary,
      userPhoto,
      workplace,
      bookmarkEmail: user?.email,
    };
    axiosSequre
      .post("/bookMarkJobs", postbookMark)
      .then((response) => {
        console.log(response);
        if (response.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "BookMarks Jobs successfully",
            showConfirmButton: false,
            timer: 3000,
          });
        }
      })
      .catch((error) => {
        setUserError(error.message);
      });
    console.log("bookMarksData:", bookMarksData);
  };

  return [handleBookMark];
};

export default useJobsBooksMarks;
