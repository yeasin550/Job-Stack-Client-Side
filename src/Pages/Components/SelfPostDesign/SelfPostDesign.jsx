import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiComment, BiShare } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import useDeletSelfPost from "../../../Hooks/useDeletSelfPost";

const SelfPostDesign = ({ selfpost }) => {

    const { _id, text, image, userPhoto, userName } = selfpost;
    const [handleDelete] = useDeletSelfPost();
    const [postLikes, setPostLikes] = useState({});
    const postId = "unique_post_id";
     // Replace with your post's unique ID
    // Load the post  likes from local storage when the component mounts
    useEffect(() => {
        const savedLikes = localStorage.getItem("postLikes");
        if (savedLikes) {
            setPostLikes(JSON.parse(savedLikes));
        }
    }, []);

    // Update local storage whenever the post likes change
    useEffect(() => {
        localStorage.setItem("postLikes", JSON.stringify(postLikes));
    }, [postLikes]);

    const handleLike = () => {
        if (!postLikes[postId]) {
            // If the user hasn't liked the post yet
            setPostLikes({
                ...postLikes,
                [postId]: true,
            });
        } else {
            // If the user has already liked the post, remove the like
            const updatedLikes = { ...postLikes };
            delete updatedLikes[postId];
            setPostLikes(updatedLikes);
        }
    };
    const likeCount = Object.values(postLikes).filter((liked) => liked).length;
    const isLiked = postLikes[postId];

    return (
        <div className="w-full p-4 h-full  shadow-xl rounded-lg">
            {/* user information */}
            <div className="mt-3 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <img className="w-10 h-10 rounded-full" src={userPhoto} />
                    <div className="">
                        <p className="font-bold">{userName}</p>
                    </div>
                </div>
                <BsThreeDots onClick={() => handleDelete(_id)} />
            </div>
            {/* user post */}
            <div className="mt-4 ">
                <p>
                    {text.length < 100 ? (
                        <>{text}</>
                    ) : (
                        <>
                            {text.slice(0, 100)}...
                            <Link
                                className="text-green-600 hover:underline"
                                to={`/profile/${_id}`}
                            >
                                Read More
                            </Link>
                        </>
                    )}
                </p>
                <img className="mt-2 w-full" src={image} alt="" />
            </div>
            {/* like comment and shear section */}
            <div className="flex justify-around items-center mt-5">
                <div className="flex items-center gap-1">
                    <button onClick={handleLike}>
                        {isLiked ? (
                            <span>
                                <AiFillHeart
                                    size={30}
                                    className="text-red-700 cursor-pointer"
                                />
                            </span>
                        ) : (
                            <span>
                                <AiOutlineHeart size={30} className="cursor-pointer" />
                            </span>
                        )}
                    </button>
                    <p>Like {likeCount}</p>
                </div>
                <div className="flex items-center">
                    <BiComment size={30} className="cursor-pointer" />

                    <h4 className="text-lg">Comment</h4>
                </div>
                <div className="flex items-center">
                    <BiShare size={30} className="cursor-pointer" />
                    <h4 className="text-lg">Share</h4>
                </div>
            </div>
        </div>
    );
};

export default SelfPostDesign;