import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AiFillYoutube } from "react-icons/ai";
import { HiPhoto } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";
import useAxioSequre from "../../../Hooks/useAxiosSequre";
import { AuthContext } from "../../../Providers/AuthProvider";
import useSelfPostfindEmail from "../../../Hooks/useSelfPostfindEmail";
import { getCurrentTimeStamp } from "../../../Hooks/useMonent";
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const SelfPostForm = ({refetch}) => {
    const { user } = useContext(AuthContext);
    const [axiosSequre] = useAxioSequre();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    const [isOpen, setIsOpen] = useState(false);

    //    modal open function 
    const openModal = () => {
        setIsOpen(true);
    };
    //   modal close functio 
    const closeModal = () => {
        setIsOpen(false);
    };

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    // Make the POST request
    const onSubmit = (data) => {
        const imgdata = new FormData();
        imgdata.append("image", data.image[0]);
        fetch(img_hosting_url, {
            method: "POST",
            body: imgdata,
        })
            .then((res) => res.json())
            .then((uploadImage) => {
                if (uploadImage.success) {
                    const imgUrl = uploadImage.data.display_url;
                    const { text} = data;
                    const selfPost = {
                      text,
                      userName: user?.displayName,
                      userPhoto: user?.photoURL,
                      email: user?.email,
                      image: imgUrl,
                      timeStamp: getCurrentTimeStamp("LLL"),
                    };
                    axiosSequre.post("/selfpost", selfPost).then((data) => {
                        if (data.data.insertedId) {
                            Swal.fire({
                                icon: "success",
                                title: "User Post successfully.",
                                timer: 1500,
                            });
                            refetch();
                            reset();
                        }
                    });
                }
            });
    };

    return (
        <div>
            {/* Create Post Modal */}
            <div className="shadowdiv border rounded-lg p-5 md:w-8/12 mx-auto ">
                <div className=" flex gap-3 items-center mb-4">
                    <div className="">
                        {user?.email ? (
                            <img className="w-10 h-10 rounded-full" src={user?.photoURL} />
                        ) : (
                            <></>
                        )}
                    </div>
                    <button
                        className="py-2 w-full text-start ps-5 bg-slate-100 hover:bg-slate-200 rounded-full text-lg"
                        onClick={openModal}
                    >
                        What's on your mind?
                    </button>
                </div>
                <hr />
                {/* Post Photo video and event section */}
                <div className="mt-3 flex justify-between items-center">
                    <div className="">
                        <label
                            className="flex items-center gap-3 px-6 py-1 hover:bg-slate-100 rounded-md"
                            htmlFor="file-input"
                        >
                            <HiPhoto className="text-[#5f9b41] text-xl" />
                            <p>Photo</p>
                        </label>
                        <input className="hidden" type="file" />
                    </div>
                    <div className="">
                        <label
                            className="flex items-center gap-3 px-6 py-1 hover:bg-slate-100 rounded-md"
                            htmlFor="file-input"
                        >
                            <AiFillYoutube className="text-[#5f9b41] text-xl" />
                            <p>video</p>
                        </label>
                        <input className="hidden" type="file" />
                    </div>
                    <div className="">
                        <label
                            className="flex items-center gap-3 px-6 py-1 hover:bg-slate-100 rounded-md"
                            htmlFor="file-input"
                        >
                            <SlCalender className="text-[#5f9b41] text-xl" />
                            <p>Event</p>
                        </label>
                        <input className="hidden" type="file" />
                    </div>
                </div>
            </div>
            {isOpen && (
                <dialog
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle"
                    open
                >
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        method="dialog"
                        className="modal-box"
                    >
                        <h1 className="text-center text-lg font-semibold -mt-3 mb-3">
                            Create post
                        </h1>
                        <hr />
                        {/* user information */}
                        <div className="mt-3">
                            {user?.email ? (
                                <div className="flex items-center gap-3">
                                    <img
                                        className="w-10 h-10 rounded-full"
                                        src={user?.photoURL}
                                    />
                                    <div className="">
                                        <p className="font-bold">{user?.displayName}</p>
                                        <button className="btn btn-xs">Public</button>
                                    </div>
                                </div>
                            ) : (
                                <p>no user</p>
                            )}
                        </div>
                        {/* text file post */}
                        <div className="mt-5">
                            <textarea
                                {...register("text")}
                                rows="5"
                                placeholder="What's on you mind?"
                                className="rounded-md px-3 py-2  w-full bg-slate-100 text-xl"
                            ></textarea>
                            {errors.text && (
                                <span className="text-red-800">text is required</span>
                            )}
                        </div>
                        {/* upload image file */}
                        <div className="image-upload flex items-center gap-12 rounded-2xl justify-center">
                            <div className="">
                                <h1 className="text-lg ">Add Photo</h1>
                            </div>
                            <div className="">
                                <label htmlFor="file-input">
                                    <img
                                        className="w-11 h-12"
                                        src="https://i.ibb.co/x5snGtV/image.png"
                                        alt="Upload"
                                    />
                                </label>
                                <input
                                    className="hidden"
                                    id="file-input"
                                    type="file"
                                    {...register("image")}
                                />
                            </div>
                        </div>
                        <button className="w-full py-2 mt-3 bg-green-500 rounded-md text-white cursor-pointer">
                            <input type="submit" value="Post" />
                        </button>
                        {/* modal clone button */}
                        <div className="modal-action">
                            <button
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-slate-300"
                                onClick={closeModal}
                            >
                                &#10005;
                            </button>
                        </div>
                    </form>
                </dialog>
            )}
        </div>
    );
};

export default SelfPostForm;