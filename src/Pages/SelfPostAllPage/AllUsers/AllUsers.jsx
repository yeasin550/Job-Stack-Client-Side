import { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
const AllUsers = () => {
  const [allUser, setAllUser] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    fetch(`https://jobstack-backend-teal.vercel.app/users`)
      .then((res) => res.json())
      .then((data) => setAllUser(data))
      .catch((error) => console.log(error));
  }, []);



   const handleFind = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchText = form.searchText.value;

    fetch(`https://jobstack-backend-teal.vercel.app/users-search/${searchText}`)
      .then((res) => res.json())
      .then((data) => setAllUser(data))
      .catch((error) => console.log(error));
  };

  const changeHandleFind = (event) => {
    const searchText = event.target.value;

    fetch(`https://jobstack-backend-teal.vercel.app/users-search/${searchText}`)
      .then((res) => res.json())
      .then((data) => setAllUser(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="my-8">
      <div className="flex justify-center items-center text-center my-12">
        <div className="form-control">
          {/* search */}
          <form onSubmit={handleFind}>
            <div className="mt-5 flex justify-center">
              <div className="flex gap-20">
                <div className="relative text-gray-600">
                  <input
                    ref={inputRef}
                    onChange={changeHandleFind}
                    name="searchText"
                    type="text"
                    placeholder="Find Connect"
                    className="bg-slate-100 h-10 px-40 ps-3 border border-blue-700 rounded-full text-sm focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 mt-3 mr-4"
                  >
                    <AiOutlineSearch className="h-4 w-4 fill-current" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {allUser ? (
        <div>
          {
            allUser.length > 0 ? <div className="grid md:grid-cols-3 gap-7 pb-5  px-5 w-full h-screen overflow-auto">
              {allUser?.map((person) => (
                <ProfileCard
                  key={person?._id}
                  person={person}
                  buttonText="Connect"
                />
              ))}
            </div> : <div className="h-[calc(100vh-138px)] lg:px-20 mt-20">
              <div className="alert alert-info shadow-md rounded-md text-white">
                <div className="alert alert-warning">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <span>Warning: Invalid Your Search Name!</span>
                </div>
              </div>
            </div>
          }
        </div>
      ) : (
        <div className="flex justify-center items-center mt-10 ">
          <span className="loading loading-spinner w-14 text-success"></span>
        </div>

      )}
    </div>
  );
};
export default AllUsers;
