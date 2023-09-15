import { FaUserAlt, FaUserPlus } from "react-icons/fa";
import SendConnectRequest from "../../../Hooks/SendConnectRequest";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import handleButtonDesiable from "../../../Hooks/handleButtonDesiable";
import { getCurrentTimeStamp } from "../../../Hooks/useMonent";
import { useLocation, useNavigate } from "react-router-dom";
import images from "../../../../src/assets/images/images.jpg";
import UseScrollTop from "../../../Hooks/UseScrollTop";

const ProfileCard = ({ person, buttonText }) => {
  const { pathname } = useLocation();
  UseScrollTop(pathname);
  const { _id, name, image, email } = person;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [connectRequest] = SendConnectRequest();
  const [reaquestsend] = handleButtonDesiable();
  const requestBTN = reaquestsend?.map((request) => request?.userID);

  const userconnect = {
    userID: _id,
    name: user?.displayName,
    image: user?.photoURL,
    userEmail: email,
    status: "pending",
    requestemail: user?.email,
    timeStamp: getCurrentTimeStamp("LLL"),
    userName: name,
    userImage: image,
  };

  return (
    <div className="w-full h-72 bg-white dark:text-black shadow-2xl  rounded-lg relative">
      <div className="">
        <img
          className="h-14 w-full rounded-tl-lg rounded-tr-lg"
          src="https://i.ibb.co/b79tz7t/Banner-3.png"
          alt="cover photo"
          draggable="false"
        />
        <div
          onClick={() => navigate(`/dynamicprofile/${_id}`)}
          className="flex justify-center cursor-pointer -mt-12"
        >
          {image ? (
            <img
              className="h-[100px] w-[100px] rounded-full"
              src={person && person.image ? person.image : images}
              alt="user profile photo"
              draggable="false"
            />
          ) : (
            <div className="h-[100px] w-[100px] rounded-full bg-gray-300 flex justify-center items-center p-4">
              <FaUserAlt className="w-full h-full"></FaUserAlt>
            </div>
          )}
        </div>
      </div>
      <div className="text-center mt-1 pb-10">
        <h1 className="text-lg font-semibold">{name}</h1>
        <p>Mern-Stack Web Developer</p>
        <p>React.js Developer</p>
        <div
          onClick={() => connectRequest(userconnect)}
          disabled={requestBTN.includes(_id)}
          className="flex justify-center"
        >
          <button className="px-16  rounded-full outline outline-offset-2 outline-2 outline-blue-500 text-blue-500 font-semibold flex items-center gap-2 absolute bottom-4">
            <FaUserPlus /> {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
