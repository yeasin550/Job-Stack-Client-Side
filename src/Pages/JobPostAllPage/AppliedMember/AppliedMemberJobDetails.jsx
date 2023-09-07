import {
  FaCloudsmith,
  FaCommentAlt,
  FaHandPointDown,
  FaRegBookmark,
  FaShare,
  FaShareAlt,
  FaSortNumericDownAlt,
} from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { BiDollarCircle } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import moment from "moment/moment";
// import { FcLike } from "react-icons/fc";
const AppliedMemberJobDetails = ({ posts, user }) => {
  console.log(posts);
  return (
    <div className="grid grid-cols-1">
      <div className=" bg-white shadow-lg rounded-md mt-5 px-6 py-2 border border-blue-500">
        {/* <div className="flex justify-end gap-2 mb-3 text-xl">
          <FaShareAlt className="cursor-pointer" />
          <FaRegBookmark className="cursor-pointer" />
        </div> */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://img.freepik.com/free-vector/heart-logo_126523-587.jpg?w=740&t=st=1694020952~exp=1694021552~hmac=f9010928b59d497b8d6dcf2dbc0d9ec113f8859775377d674cf8e6b9a66f29c5"
              alt="Company Logo"
              className="w-20 h-20 rounded-md mr-4 border border-gray-400"
            />
            <div>
              <h2 className=" font-semibold text-gray-800">
                {posts?.jobTitle}
              </h2>
              <p className="text-gray-600 ">{posts?.companyName}</p>
            </div>
          </div>
          <div>
            <p>Canada {posts?.location}</p>
            {posts?.workplace}
          </div>
          <div>
            <p> {posts?.postDate}</p>
            {/* {posts?.workplace} */}
          </div>
          <div>
            <div className="flex items-center gap-3">
              {/* <img
                className="h-16 w-16 rounded-full"
                src={posts?.userPhoto}
                // src=""
                alt="img"
              /> */}
              <div>
                <h1 className="font-semibold ">
                  Front-End Developer{posts?.position}
                </h1>
                {/* <h1>5 Days Left</h1> */}
                <h1 className="font-bold text-gray-600">
                  {/* {moment().format("MMMM Do YYYY")} */}
                  <p> ${posts?.salary}</p>
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* <div>
        
          <hr className="my-5 border border-green-500" />
          <div className="my-5">
            <h1 className="font-semibold text-2xl">Skills____</h1>
            <div className="flex gap-3 ml-5 mt-3">
              <h1 className="bg-gray-200 font-bold px-3 py-1 hover:border-blue-500 border hover:shadow-lg hover:bg-white rounded-md text-purple-700">
                Html
              </h1>
              <h1 className="bg-gray-200 font-bold px-3 py-1 hover:border-blue-500 border hover:shadow-lg hover:bg-white rounded-md text-purple-700">
                Css
              </h1>
              <h1 className="bg-gray-200 font-bold px-3 py-1 hover:border-blue-500 border hover:shadow-lg hover:bg-white rounded-md text-purple-700">
                JavaScript
              </h1>
              <h1 className="bg-gray-200 font-bold px-3 py-1 hover:border-blue-500 border hover:shadow-lg hover:bg-white rounded-md text-purple-700">
                React
              </h1>
              <h1 className="bg-gray-200 font-bold px-3 py-1 hover:border-blue-500 border hover:shadow-lg hover:bg-white rounded-md text-purple-700">
                MongoDB
              </h1>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AppliedMemberJobDetails;
