import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";
import useSingleUser from "../../Hooks/useSingleUser";
import useAxioSequre from "../../Hooks/useAxiosSequre";
const UserContactPostForm = () => {
  const [axiosSequre] = useAxioSequre();
  const [singleUser, refetch] = useSingleUser();
  const { _id } = singleUser[0] || {};
  console.log(_id);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { phoneNumber, currentLocation, homeLocation } = data;
    const contactInfo = { phoneNumber, currentLocation, homeLocation };
    axiosSequre
      .put(`/contactinfo/${_id}`, contactInfo)
      .then((data) => {
        if (data?.data?.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Save Contact INFO",
            timer: 1500,
          });
          reset();
          refetch();
        }
      })
      .catch((err) => {
        console.log(err.massage);
      });
  };
  return (
    <div>
      <div className="flex justify-start items-center gap-2 mt-2 mb-2">
        <FaPlus className="border-2 border-blue-500 p-1 rounded-full text-[20px] text-blue-500"></FaPlus>
        <label htmlFor="my_modal_3" className="link text-blue-500">
          Add Contact Info
        </label>
      </div>
      <div>
        <input type="checkbox" id="my_modal_3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <div className="modal-action">
              <label
                htmlFor="my_modal_3"
                className="btn btn-circle bg-green-400 absolute top-3 right-3 text-white"
              >
                X
              </label>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  {...register("phoneNumber")}
                  type="number"
                  placeholder="type here"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Current City</span>
                </label>
                <input
                  {...register("currentLocation")}
                  type="text"
                  placeholder="type here"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Home Town</span>
                </label>
                <input
                  {...register("homeLocation")}
                  type="text"
                  placeholder="type here"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-3">
                <input
                  type="submit"
                  value="Save"
                  className="btn bg-green-500 text-white hover:bg-green-500"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserContactPostForm;
