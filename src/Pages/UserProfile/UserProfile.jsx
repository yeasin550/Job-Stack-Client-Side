import React, { useState } from "react";
import "./UserProfile.css";
import { FaPen, FaUserAlt } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UserInfo from "../UserDetails/UserInfo/UserInfo";
import JobPostForm from "../JobPostAllPage/JobPostForm/JobPostForm";
import SelfPostForm from "../SelfPostAllPage/SelfPostForm/SelfPostForm";
import SelfPostDesign from "../Components/SelfPostDesign/SelfPostDesign";
import useJobPosFindEmail from "../../Hooks/useJobPosFindEmail";
import useSelfPostfindEmail from "../../Hooks/useSelfPostfindEmail";
import JobPostDesign from "../Components/JobPostDesign/JobPostDesign";
import { useForm } from "react-hook-form";
import ConfirmRequset from "../ConfirmRequest/ConfirmRequset";
import Temporary from "../Components/Temporary";
import useSingleUser from "../../Hooks/useSingleUser";
import useProfileUpdate from "../../Hooks/useProfileUpdate";
import ConnectedAllUser from "../Components/ConnectedAllUsers/ConnectedAllUser";
import useCompany from "../../Hooks/useCompany";
import useAdmin from "../../Hooks/useAdmin";
const UserProfile = () => {
  const [singleSelfPost] = useSelfPostfindEmail();
  const [singlejobposts, refetch] = useJobPosFindEmail();
  const [singleUser] = useSingleUser();
  const [isCompany, isCompanyLoading] = useCompany();
  const [isAdmin] = useAdmin();
  const single = singleUser[0];
  const { register, handleSubmit } = useForm();
  const [
    updateProfileImage,
    updateBio,
    updateLocations,
    updateName,
    updateCoverPhoto,
  ] = useProfileUpdate();
  //  activie tabindex set this state
  const [tabIndex, setTabIndex] = useState(0);
  //set active tab design function
  const [active, setActive] = useState("");
  const clickactive = (active) => {
    setActive(active);
  };
  return (
    //div main container
    <div className="mt-6 mb-24 lg:px-44">
      {/* second container */}
      <div>
        <div className="border profile-shadow rounded-md">
          {/* background image*/}
          <div className="w-full h-[300px] relative">
            {single?.bgImage ? (
              <img
                className="rounded-t-md w-full h-full"
                src={single?.bgImage}
                alt="background image"
              />
            ) : (
              <img
                className="rounded-t-md w-full h-full"
                src="https://i.ibb.co/3vVkcNV/download-2.jpg"
                alt="logo"
              />
            )}
            <label
              htmlFor="my_modal_13"
              className="text-[20px] text-white btn-md absolute bottom-3 right-3 font-bold btn btn-circle border-none hover:bg-[#09867E] bg-[#09867E]"
            >
              <FaPen></FaPen>
            </label>
          </div>
          {/* user picture and details  */}
          <div className="flex justify-start px-4  gap-5">
            <div className="w-48 h-48 relative">
              {single?.image ? (
                <img
                  className="w-48 h-48 border rounded-full absolute -top-12"
                  src={single?.image}
                  alt="logo"
                />
              ) : (
                <FaUserAlt className="w-48 h-48 border rounded-full absolute -top-12"></FaUserAlt>
              )}
            </div>
            <div className="mt-5">
              <div>
                <p className="text-3xl font-bold font-sans">{single?.name}</p>
                {single?.university && (
                  <p className="text-[18px] font-sans font-semibold">
                    {single?.university}
                  </p>
                )}
                {single?.currentLocation && <p>{single?.currentLocation}</p>}
                {single?.bio && <p>{single?.bio}</p>}
              </div>
            </div>
          </div>
          <div className="flex justify-end relative mr-4 -top-24">
            <label
              htmlFor="my_modal_19"
              className="flex justify-center items-center gap-2 hover:bg-[#09867E] btn bg-[#09867E] text-white btn-sm"
            >
              <FaPen></FaPen> Edit Profile
            </label>
          </div>
        </div>
        <div className="mt-1">
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList className="flex justify-center items-center border py-2 profile-shadow  gap-6 mb-8">
              {isCompany ? (
                <>
                  <Tab
                    onClick={() => clickactive("jobpost")}
                    className={` cursor-pointer text ${
                      active == "jobpost" ? "active cursor-pointer" : ""
                    }`}
                  >
                    Job Post
                  </Tab>
                </>
              ) : (
                <>
                  <Tab
                    onClick={() => clickactive("post")}
                    className={` cursor-pointer text ${
                      active == "post" ? "active cursor-pointer" : ""
                    }`}
                  >
                    Post
                  </Tab>

                  <Tab
                    onClick={() => clickactive("about")}
                    className={` cursor-pointer text ${
                      active == "about" ? "active cursor-pointer" : ""
                    }`}
                  >
                    About
                  </Tab>
                  <Tab
                    onClick={() => clickactive("connect")}
                    className={` cursor-pointer text ${
                      active == "connect" ? "active cursor-pointer" : ""
                    }`}
                  >
                    Connect
                  </Tab>
                  <Tab
                    onClick={() => clickactive("more")}
                    className={` cursor-pointer text ${
                      active == "more" ? "active cursor-pointer" : ""
                    }`}
                  >
                    More
                  </Tab>
                </>
              )}
            </TabList>
            {isCompany ? (
              <>
                <TabPanel>
                  <JobPostForm refetch={refetch}></JobPostForm>
                  <div>
                    {singlejobposts?.map((posts) => (
                      <JobPostDesign
                        key={posts?._id}
                        posts={posts}
                      ></JobPostDesign>
                    ))}
                  </div>
                </TabPanel>
              </>
            ) : (
              <>
                <TabPanel>
                  <SelfPostForm></SelfPostForm>
                  <div className="grid md:grid-cols-1 justify-items-center  gap-10 mt-10 ">
                    {singleSelfPost?.map((selfpost) => (
                      <SelfPostDesign
                        key={selfpost?._id}
                        selfpost={selfpost}
                        singleSelfPost={singleSelfPost}
                      ></SelfPostDesign>
                    ))}
                  </div>
                </TabPanel>
                {/* user about  */}
                <TabPanel>
                  <UserInfo></UserInfo>
                </TabPanel>
                {/* user connect   */}
                <TabPanel>
                  <ConnectedAllUser />
                </TabPanel>
                {/* user more featuesr add  */}
                <TabPanel>
                  <Temporary></Temporary>
                </TabPanel>
              </>
            )}
          </Tabs>
        </div>
      </div>
      {/* user background image modal  */}
      <div>
        <input type="checkbox" id="my_modal_13" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <div className="modal-action">
              <label
                htmlFor="my_modal_13"
                className="btn text-white btn-circle bg-[#09867E] border-none absolute top-3 right-3"
              >
                X
              </label>
            </div>
            <form onSubmit={handleSubmit(updateCoverPhoto)}>
              <h3 className="font-bold text-lg">Update Cover Photo</h3>
              <input
                {...register("bgImage")}
                required
                type="file"
                className="file-input file-input-bordered dark:text-black file-input-success w-full mt-10"
              />
              <input
                type="submit"
                value="Update"
                className="w-full bg-[#09867E] mt-4 text-white h-10 rounded-lg"
              />
            </form>
          </div>
        </div>
      </div>
      {/* user profile image modal  */}
      <div>
        <input type="checkbox" id="my_modal_19" className="modal-toggle" />
        <div className="modal dark:text-black">
          <div className="modal-box">
            <div className="modal-action">
              <label
                htmlFor="my_modal_19"
                className="btn text-white btn-circle bg-[#09867E] border-none absolute top-3 right-3"
              >
                X
              </label>
            </div>
            {/* update image  */}
            <form onSubmit={handleSubmit(updateProfileImage)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Update Profile Image</span>
                </label>
                <input
                  {...register("image")}
                  required
                  type="file"
                  className="file-input file-input-bordered file-input-success w-full"
                />
                <input
                  type="submit"
                  value="Save Changes"
                  className="w-4/12 mx-auto bg-[#09867E] mt-4 text-white h-10 rounded-lg"
                />
              </div>
            </form>
            {/* update name  */}
            <form action="" onSubmit={handleSubmit(updateBio)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Add Bio</span>
                </label>
                <textarea
                  {...register("bio")}
                  required
                  className="textarea textarea-success w-full"
                  placeholder="Bio"
                ></textarea>
                <input
                  type="submit"
                  value="Save Changes"
                  className="w-4/12 mx-auto bg-[#09867E] mt-4 text-white h-10 rounded-lg"
                />
              </div>
            </form>
            {/* update bio  */}
            <form action="" onSubmit={handleSubmit(updateName)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Update Name</span>
                </label>
                <input
                  {...register("name")}
                  required
                  className="input input-bordered input-success w-full"
                  placeholder="type here"
                ></input>
                <input
                  type="submit"
                  value="Save Changes"
                  className="w-4/12 mx-auto bg-[#09867E] mt-4 text-white h-10 rounded-lg"
                />
              </div>
            </form>
            {/* update current location  */}
            <form action="" onSubmit={handleSubmit(updateLocations)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Update Current Location</span>
                </label>
                <input
                  {...register("currentLocation")}
                  required
                  className="input input-bordered input-success w-full"
                  placeholder="type here"
                ></input>
                <input
                  type="submit"
                  value="Save Changes"
                  className="w-4/12 mx-auto bg-[#09867E] mt-4 text-white h-10 rounded-lg"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
