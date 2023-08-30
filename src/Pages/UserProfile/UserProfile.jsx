import React, { useState } from "react";
import './UserProfile.css'
import { FaPen } from "react-icons/fa";
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
import useProfileUpdate from "../../Hooks/useProfileUpdate";
import ConfirmRequset from "../ConfirmRequest/ConfirmRequset";

const UserProfile = () => {

  const [singleSelfPost, refetch] = useSelfPostfindEmail();

  const [jobposts] = useJobPosFindEmail();
  const { register, handleSubmit } = useForm();
  const [updateProfileImage, updateBio, updateLocations, updateName, updateCoverPhoto] = useProfileUpdate();
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
            <img
              className="rounded-t-md w-full h-full"
              src="https://i.ibb.co/4g9QMky/description.jpg"
              alt="background image"
            />
            <label htmlFor="my_modal_13" className="text-[20px] text-white btn-md absolute bottom-3 right-3 font-bold btn btn-circle border-none hover:bg-blue-600 bg-blue-500" ><FaPen></FaPen></label>
          </div>
          {/* user picture and details  */}
          <div className="flex justify-start px-4  gap-5">
            <div className="w-48 h-48 relative">
              <img
                className="w-48 h-48 border rounded-full absolute  -top-12"
                src="https://i.ibb.co/0fZvJMk/364805402-265317659588730-4531070019685307614-n.jpg"
                alt=""
              />
            </div>
            <div className="mt-5">
              <div>
                <p className="text-3xl font-bold font-sans">Munimul Islam</p>
                <p className="text-[18px] font-sans font-semibold">
                  {" "}
                  InterNational University of Scholars
                </p>
                <p>Dhaka, Dhaka, Bangladesh</p>
                <p className="link text-blue-500">32 Connection</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end relative mr-4 -top-24">
            <label htmlFor="my_modal_6" className="flex justify-center items-center gap-2 hover:bg-green-500 btn bg-green-500 text-white btn-sm">
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
              <Tab
                onClick={() => clickactive("post")}
                className={` cursor-pointer text ${
                  active == "post" ? "active cursor-pointer" : ""
                }`}
              >
                Post
              </Tab>

              <Tab
                onClick={() => clickactive("jobpost")}
                className={` cursor-pointer text ${
                  active == "jobpost" ? "active cursor-pointer" : ""
                }`}
              >
                Job Post
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
                className={` cursor-pointer text ${active == "connect" ? "active cursor-pointer" : ""
                }`}
              >
                Connect
              </Tab>
              <Tab
                onClick={() => clickactive("Connection request")}
                className={` cursor-pointer text ${active == "Connection request" ? "active cursor-pointer" : ""
                  }`}
              >
                Connection request
              </Tab>
              <Tab
                onClick={() => clickactive("more")}
                className={` cursor-pointer text ${
                  active == "more" ? "active cursor-pointer" : ""
                }`}
              >
                More
              </Tab>
            </TabList>
            {/* users self  post */}
            <TabPanel>
              <SelfPostForm refetch={refetch}></SelfPostForm>
              <div className="grid md:grid-cols-2 px-10 gap-10 mt-10 ">
                {singleSelfPost?.map((selfpost) => (
                  <SelfPostDesign
                    key={selfpost?._id}
                    selfpost={selfpost}
                    singleSelfPost={singleSelfPost}
                  ></SelfPostDesign>
                ))}
              </div>
            </TabPanel>
            {/* user job post job post */}
            <TabPanel>
              <JobPostForm refetch={refetch}></JobPostForm>
              <div>
                {jobposts?.map((posts) => (
                  <JobPostDesign key={posts?._id} posts={posts}></JobPostDesign>
                ))}
              </div>
            </TabPanel>
            {/* user about  */}
            <TabPanel>
              <UserInfo></UserInfo>
            </TabPanel>
            {/* user connect   */}
            <TabPanel></TabPanel>
            {/* user Connect request */}
            <TabPanel>
            <ConfirmRequset></ConfirmRequset>
            </TabPanel>
            {/* user more featuesr add  */}
            <TabPanel></TabPanel>
          </Tabs>
        </div>
      </div>
      {/* user background image modal  */}
      <div>
        <input type="checkbox" id="my_modal_13" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <div className="modal-action">
              <label htmlFor="my_modal_13" className="btn text-white btn-circle bg-green-600 border-none absolute top-3 right-3">X</label>
            </div>
            <form onSubmit={handleSubmit(updateCoverPhoto)}>
              <h3 className="font-bold text-lg">Update Cover Photo</h3>
              <input {...register("bgImage")} required type="file" className="file-input file-input-bordered file-input-success w-full mt-10" />
              <input type="submit" value="Update" className="w-full bg-green-600 mt-4 text-white h-10 rounded-lg" />
            </form>
          </div>
        </div>
      </div>
      {/* user profile image modal  */}
      <div>
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <div className="modal-action">
              <label htmlFor="my_modal_6" className="btn text-white btn-circle bg-green-600 border-none absolute top-3 right-3">X</label>
            </div>
            {/* update image  */}
            <form onSubmit={handleSubmit(updateProfileImage)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Update Profile Image</span>
                </label>
                <input  {...register("image")} required type="file" className="file-input file-input-bordered file-input-success w-full" />
                <input type="submit" value="Save Changes" className="w-4/12 mx-auto bg-green-600 mt-4 text-white h-10 rounded-lg" />
              </div>
            </form>
            {/* update name  */}
            <form action="" onSubmit={handleSubmit(updateName)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Add Bio</span>
                </label>
                <textarea {...register("bio")} required className="textarea textarea-success w-full" placeholder="Bio"></textarea>
                <input type="submit" value="Save Changes" className="w-4/12 mx-auto bg-green-600 mt-4 text-white h-10 rounded-lg" />
              </div>
            </form>
            {/* update bio  */}
            <form action="" onSubmit={handleSubmit(updateBio)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Update Name</span>
                </label>
                <input {...register("name")} required className="input input-bordered input-success w-full" placeholder="type here"></input>
                <input type="submit" value="Save Changes" className="w-4/12 mx-auto bg-green-600 mt-4 text-white h-10 rounded-lg" />
              </div>
            </form>
            {/* update current location  */}
            <form action="" onSubmit={handleSubmit(updateLocations)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Update Current Location</span>
                </label>
                <input {...register("currentLocation")} required className="input input-bordered input-success w-full" placeholder="type here"></input>
                <input type="submit" value="Save Changes" className="w-4/12 mx-auto bg-green-600 mt-4 text-white h-10 rounded-lg" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div >
  );
};

export default UserProfile;



