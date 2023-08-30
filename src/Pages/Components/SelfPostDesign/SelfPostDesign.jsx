import React, { useContext } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdDelete, MdSend } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import { FaShare, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import useDeletSelfPost from "../../../Hooks/useDeletSelfPost";
import ReadMorText from "./ReadMorText";
import usePostShare from "../../../Hooks/usePostShare";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxioSequre from "../../../Hooks/useAxiosSequre";
import Swal from "sweetalert2";

const SelfPostDesign = ({ selfpost }) => {
  const { _id, text, image, userPhoto, userName, timeStamp } = selfpost;
  const [handleDelete] = useDeletSelfPost();
  const { user } = useContext(AuthContext);
  const [axiosSequre] = useAxioSequre();

  const [handleFacebookShare, handleLinkedinShare, handleTwitterShare] =
    usePostShare();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data.comment);
    const addcomment = {
      comment: data?.comment,
      userName: user?.displayName,
      userPhoto: user?.photoURL,
      postId: _id,
      time: timeStamp,
    };
    axiosSequre.post("/comments", addcomment).then((data) => {
      if (data?.data?.insertedId) {
        Swal.fire({
          icon: "success",
          title: "comment now",
          timer: 1500,
        });
        reset();
        refetch();
      }
    });
  };

  return (
    <div className="w-full p-4  shadow-xl rounded-lg">
      {/* user information */}
      <div className="mt-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img className="w-10 h-10 rounded-full" src={userPhoto} />
          <div className="">
            <p className="font-bold">{userName}</p>
            <p>{timeStamp}</p>
          </div>
        </div>

        {/*Post edit and delete  */}
        <div className="dropdown dropdown-left">
          <label tabIndex={0}>
            <BsThreeDots />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box "
          >
            <button className="flex items-center gap-1 text-lg hover:bg-slate-200 w-full py-1 rounded-lg ps-2 font-semibold">
              <GrEdit />
              Edit
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="flex items-center gap-1 text-lg hover:bg-slate-200 w-full py-1 rounded-lg ps-2 font-semibold"
            >
              <MdDelete />
              Delete
            </button>
          </ul>
        </div>
      </div>
      {/* user post */}
      <div className="mt-4 ">
        <ReadMorText>{text}</ReadMorText>
        <img className="mt-2 w-full h-80" src={image} alt="" />
      </div>

      {/* like comment and shear section */}
      <div className="flex justify-around items-center mt-5">
        <div className="flex items-center gap-1">
         
          <button onClick={() => likePost(_id)}>
            <AiOutlineHeart size={30} className="cursor-pointer" />
          </button>
        </div>

        <div className="">
          <label htmlFor="my_modal_6" className="">
            Comment
          </label>
        </div>

        {/* shear the post */}
        <div className="dropdown dropdown-bottom flex items-center">
          <label tabIndex={0}>
            <div className="flex items-center z-50">
              <FaShare size={30} className="cursor-pointer text" />
              <h4 className="text-lg">Share</h4>
            </div>
          </label>

          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box "
          >
            <button
              onClick={() => handleFacebookShare()}
              className="flex items-center gap-1 text-lg hover:bg-slate-200 w-full py-1 rounded-lg ps-2 font-semibold"
            >
              <FaFacebook />
              Facebook
            </button>
            <button
              onClick={() => handleLinkedinShare()}
              className="flex items-center gap-1 text-lg hover:bg-slate-200 w-full py-1 rounded-lg ps-2 font-semibold"
            >
              <FaLinkedin />
              LinkedinIn
            </button>
            <button
              onClick={() => handleTwitterShare()}
              className="flex items-center gap-1 text-lg hover:bg-slate-200 w-full py-1 rounded-lg ps-2 font-semibold"
            >
              <FaTwitter />
              Twitter
            </button>
          </ul>
        </div>
      </div>
      {/* modal box */}
      <div>
        <input type="checkbox" id="my_modal_6" className="modal-toggle " />
        <div className="modal">
          <div className="modal-box h-[400px]">
            {/* start modal close button */}
            <div className="modal-action">
              <label
                htmlFor="my_modal_6"
                className="btn btn-circle bg-green-400 absolute top-3 right-3 text-white"
              >
                X
              </label>
            </div>
            {/* end modal close button */}
            {/* add comment input filed */}
            <div className="mt-5">
              <form onSubmit={handleSubmit(onSubmit)} className="relative ">
                <input
                  type="text"
                  className="input input-bordered w-full "
                  placeholder="enter your comment"
                  {...register("comment", { required: true })}
                />
                <button className="absolute right-3 top-4 text-xl text-blue-700">
                  <MdSend />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfPostDesign;
