import React, { useContext, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdDelete, MdSend } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import { BiCommentError } from "react-icons/bi";
import {
  FaShare,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaCommentAlt,
  FaUserAlt,
} from "react-icons/fa";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import useDeletSelfPost from "../../../Hooks/useDeletSelfPost";
import ReadMorText from "./ReadMorText";
import usePostShare from "../../../Hooks/usePostShare";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxioSequre from "../../../Hooks/useAxiosSequre";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import Comment from "./Comment";
import useSingleUser from "../../../Hooks/useSingleUser";
import { useLocation } from "react-router-dom";
import UseScrollTop from "../../../Hooks/UseScrollTop";
import toast from "react-hot-toast";
import usePostNotification from "../../../Hooks/usePostNotification";

const SelfPostDesign = ({ selfpost }) => {
  const { pathname } = useLocation();
  UseScrollTop(pathname);
  const { _id, text, image, userPhoto, userName, timeStamp, userId, email } = selfpost;

  const [handleDelete] = useDeletSelfPost();
  const { user } = useContext(AuthContext);
  const [axiosSequre] = useAxioSequre();
  const [singleUser] = useSingleUser();
  const [clickedid, setClickedid] = useState(null);
  const [clickedemail, setClickedemail] = useState(null);
  const [handleFacebookShare, handleLinkedinShare, handleTwitterShare] = usePostShare();
  const [postNotification] = usePostNotification();
  const { register, handleSubmit, reset } = useForm();

  // comment data fucation
  const makeComment = (id, email) => {
    setClickedid(id);
    setClickedemail(email);
  };
  const { data: commenttext = [], refetch } = useQuery(
    ["commenttext", clickedid],
    async () => {
      const res = await axiosSequre.get(`/comment/${clickedid}`);
      return res.data;
    }
  );

  // comment Post funcation
  const onSubmit = (data) => {

    //comment object 
    const addcomment = {
      comment: data?.commenttext,
      userName: user?.displayName,
      userPhoto: user?.photoURL,
      postId: clickedid,
      time: timeStamp,
    };

    //notification object
    const notify = {
      reciveEmail: clickedemail,
      sendername: user?.displayName,
      massage: data?.commenttext,
      timeStamp: timeStamp,
      senderimage: user?.photoURL,
    }


    axiosSequre.post("/comments", addcomment).then((data) => {
      if (data?.data?.insertedId) {
        refetch();
        reset();
        postNotification(notify);
      }
    });
  };

  // comment box hide and show funcaton
  const [isOpens, setIsOpens] = useState(false);
  const openDiv = () => {
    setIsOpens(true);
  };
  const closeDiv = () => {
    setIsOpens(false);
  };

  // Post Edit and update Modal Funcation
  const [editModal, seteditModal] = useState(false);
  const openModals = () => {
    seteditModal(true);
  };
  const closeModals = () => {
    seteditModal(false);
  };

  const makeEdit = (id) => {
    setClickedid(id);
    openModals();
  };

  const updatePost = (data) => {
    console.log(data);
    const selfPost = {
      text: data.text,
    };

    axiosSequre
      .patch(`/updatepost/${_id}`, selfPost)
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Update successfully.",
            timer: 1500,
          });
          refetch();
          reset();
        }
      })
      .catch((error) => {
        console.error("Error posting:", error);
      });
  };

  // Post Report Modla funcation
  const [reportModal, setreportModal] = useState(false);
  const openModal = () => {
    setreportModal(true);
  };
  const closeModal = () => {
    setreportModal(false);
  };

  const PostReport = (id) => {
    setClickedid(id);
    openModal();
  };

  const [selectedReasons, setSelectedReasons] = useState([]);
  const handleCheckboxChange = (reason) => {
    if (selectedReasons.includes(reason)) {
      // If the reason is already selected, remove it
      setSelectedReasons(selectedReasons.filter((item) => item !== reason));
    } else {
      // If the reason is not selected, add it
      setSelectedReasons([...selectedReasons, reason]);
    }
  };

  const handleReport = () => {
    const addreport = {
      selectedReasons,
      postId: clickedid,
      userName: user?.displayName,
      userPhoto: user?.photoURL,
    };

    axiosSequre.post("/post-report", addreport).then((data) => {
      if (data?.data?.insertedId) {
        refetch();
        reset();
        toast.success("Post Report Successfully");
      }
    });
  };

  // like funcation
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const handleLike = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false);
      setCount(count - 1);
    }
  };
  return (
    <div className="lg:w-[550px] w-full mt-5 p-4 shadow-xl rounded-lg">
      {/* user information */}
      <div className="mt-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {userPhoto ? (
            <img className="w-10 h-10 rounded-full" src={userPhoto} />
          ) : (
            <FaUserAlt className="w-10 h-10 rounded-full bg-gray-200"></FaUserAlt>
          )}
          <div className="">
            <p className="font-bold">{userName}</p>
            <p>{timeStamp}</p>
          </div>
        </div>

        {/*Post edit and delete  */}
        {singleUser[0]?._id == userId ? (
          <div className="dropdown dropdown-left">
            <label tabIndex={0}>
              <BsThreeDots />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box "
            >
              <button
                onClick={() => makeEdit(_id)}
                className="flex items-center gap-1 text-lg hover:bg-slate-200 w-full py-1 rounded-lg ps-2 font-semibold"
              >
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
        ) : (
          <div className="dropdown dropdown-left">
            <label tabIndex={0}>
              <BsThreeDots />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box "
            >
              <button
                onClick={() => PostReport(_id)}
                className="flex items-center gap-1 text-lg hover:bg-slate-200 w-full py-1 rounded-lg ps-2 font-semibold"
              >
                <BiCommentError />
                ReportPost
              </button>
            </ul>
          </div>
        )}
      </div>
      {/* user post */}
      <div className="mt-4 ">
        <ReadMorText>{text}</ReadMorText>
        <img className="mt-2 w-full h-80" src={image} alt="user photo" />
      </div>

      {/* like comment and shear section */}
      <div className="flex justify-around items-center mt-5">
        <div
          onClick={() => handleLike(_id)}
          className="flex items-center gap-1"
        >
          {like ? (
            <AiTwotoneHeart size={26} className="cursor-pointer text-red-600" />
          ) : (
            <AiOutlineHeart size={26} className="cursor-pointer" />
          )}
          <p> likes: {count}</p>
        </div>
        {/* comment button */}
        <div onClick={() => makeComment(_id, email)} className="">
          <button
            onClick={isOpens ? closeDiv : openDiv}
            className="flex items-center gap-1"
          >
            <FaCommentAlt size={20} className="cursor-pointer" />
            Comment {commenttext.length}
          </button>
        </div>

        {/* shear the post */}
        <div className="dropdown dropdown-bottom dark:text-black flex items-center">
          <label tabIndex={0}>
            <div className="flex items-center gap-1 z-50">
              <FaShare size={20} className="cursor-pointer text" />
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
      {/* post show all comment */}
      {isOpens && (
        <div className=" mt-5">
          <div className="flex items-center gap-2 mt-8">
            <div className="">
              <img
                className="h-10 w-10 rounded-full"
                src={user?.photoURL}
                alt="user photo"
              />
            </div>
            <div className="">
              <form onSubmit={handleSubmit(onSubmit, email)}>
                <div className="relative w-full">
                  <input
                    {...register("commenttext", { required: true })}
                    type="text"
                    className="py-2 w-[400px] rounded-full ps-3 bg-slate-100"
                    placeholder="Enter your comment"
                  />
                  <button className="absolute right-3 top-3 text-xl text-blue-700">
                    <MdSend />
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="">
            {commenttext.map((commentInfo) => (
              <Comment
                key={commentInfo._id}
                commentInfo={commentInfo}
              ></Comment>
            ))}
          </div>
        </div>
      )}

      {/* edit modal box start */}
      {editModal && (
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle"
          open
        >
          <div method="dialog" className="modal-box">
            <h1 className="text-center text-2xl font-bold -mt-3 mb-3">
              Edit Post
            </h1>
            <hr />
            <form onSubmit={handleSubmit(updatePost)}>
              <div className="mt-5">
                <textarea
                  {...register("text")}
                  rows="5"
                  placeholder="What's on you mind?"
                  className="rounded-md px-3 py-2  w-full bg-slate-100 text-xl"
                  defaultValue={text}
                ></textarea>
              </div>
              <button className="w-full py-2 mt-3 bg-green-500 rounded-md text-white cursor-pointer">
                <input type="submit" value="Update Post" />
              </button>
              {/* edit modal close button */}
            </form>
            <div className="modal-action">
              <button
                onClick={closeModals}
                className="text-white btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-green-500"
              >
                X
              </button>
            </div>
          </div>
        </dialog>
      )}

      {/* Post Report modal box */}
      {reportModal && (
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle"
          open
        >
          <div method="dialog" className="modal-box">
            <h1 className="text-center text-2xl font-bold -mt-3 mb-3">
              Report
            </h1>
            <hr />
            <div className="">
              <ul>
                <li>
                  <input
                    type="checkbox"
                    checked={selectedReasons.includes("Spam")}
                    onChange={() => handleCheckboxChange("Spam")}
                  />
                  Spam
                </li>
                <li className="mt-3">
                  <input
                    type="checkbox"
                    checked={selectedReasons.includes("Harassment")}
                    onChange={() => handleCheckboxChange("Harassment")}
                  />
                  Harassment
                </li>
                <li className="mt-3">
                  <input
                    type="checkbox"
                    checked={selectedReasons.includes("False information")}
                    onChange={() => handleCheckboxChange("False information")}
                  />
                  False information
                </li>
                <li className="mt-3">
                  <input
                    type="checkbox"
                    checked={selectedReasons.includes("Something Else")}
                    onChange={() => handleCheckboxChange("Something Else")}
                  />
                  Something Else
                </li>
              </ul>
              <button className="mt-3" onClick={handleReport}>
                Report
              </button>
            </div>
            <div className="modal-action">
              <button
                onClick={closeModal}
                className="text-white btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-green-500"
              >
                X
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default SelfPostDesign;
