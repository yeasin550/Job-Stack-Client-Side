import React from "react";
import useNotificationFindEmail from "../../Hooks/useNotificationFindEmail";
import { BsThreeDots } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import useAxioSequre from "../../Hooks/useAxiosSequre";
import Swal from "sweetalert2";
const Notification = () => {
  const [singlenotify, refetch] = useNotificationFindEmail();
  const [axiosSequre] = useAxioSequre();
  const deletNotify = (id) => {
    axiosSequre
      .delete(`/notifydelet/${id}`)
      .then((response) => {
        if (response.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Notification deleted successfully!',
          });
        } else {
          Swal.fire({
            icon: 'info',
            title: 'No Change',
            text: 'No notifications were deleted.',
          });
        }
      })
  }
  console.log(singlenotify)
  return (
    <div className="min-h-screen">
      <div className="max-w-screen-xl mx-auto md:px-20 grid md:grid-cols-2  justify-items-center gap-10">
        {singlenotify.map((notify) => (
          <div
            key={notify?._id}
            className="flex flex-row px-4 py-2 justify-between items-center mt-20  border w-full border-gray-500"
          >
            <div className="flex justify-start gap-4 items-center">
              <div className="w-14 h-14">
                {notify?.senderimage ? (
                  <>
                    <img
                      src={notify?.senderimage}
                      className="w-14 h-14 rounded-full bg-gray-300"
                      alt="logo"
                    />
                  </>
                ) : (
                  <>
                    <FaUserAlt className="w-14 h-14 rounded-full bg-gray-200"></FaUserAlt>
                  </>
                )}
              </div>
              <div>
                <p>{notify?.sendername}</p>
                <p>{notify?.massage}</p>
                <p>{notify?.timeStamp}</p>
              </div>
            </div>
            <div className="dropdown hover:bg-gray-400 flex justify-center items-center rounded-full w-8 h-8 dropdown-left">
              <label className=" " tabIndex={0}>
                <BsThreeDots />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box "
              >
                <button
                  onClick={() => deletNotify(notify?._id)}
                  className="flex items-center gap-1 text-lg hover:bg-slate-200 w-full py-1 rounded-lg ps-2 font-semibold"
                >
                  <MdDelete />
                  Delete
                </button>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
