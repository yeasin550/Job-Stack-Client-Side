import React, { useEffect, useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete } from "react-icons/md";


const Conversation = ({data, currentUserId,handleDeleteChat, online}) => {

    const [userData, setUserData] = useState([])
    
    useEffect(()=> {
  
        const userId = data?.members?.find((id)=>id!==currentUserId)
       console.log(userId)
         fetch(`https://jobstack-backend-teal.vercel.app/user/${userId}`)
         .then((res) => res.json())
         .then((data) =>{
          setUserData(data)
    
         })
        },[])


    return (

        <div className='flex'>
          <div className='flex min-w-[96%] items-center p-4 border-b border-b-gray-300  hover:bg-gray-300 hover:px-4 rounded-lg'>
                    <div className='cursor-pointer items-center'>
            <div className='flex items-center'>
            {online && <div className=""></div>}
                <div>
                <img src={userData?.image} className="w-[50px]  h-[50px] rounded-full p-[2px] border border-primary"  alt=""/>
                
                </div>
                <div className='pl-4'>
                <h3 className='text-lg font-semibold'>{userData?.name}</h3>
                <span style={{color: online?"#51e790":""}}>{online? "Online" : "Offline"}</span>
                </div>
                </div>
              </div>
            </div>

        {/* =================three dot ===================== */}
          <div className="dropdown dropdown-left cursor-pointer">
            <label tabIndex={0}>
            <BsThreeDotsVertical />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box "
          >
            <button
              onClick={() => handleDeleteChat(data?._id)}
              className="flex items-center gap-1 text-lg hover:bg-slate-200 w-full py-1 rounded-lg ps-2 font-semibold"
            >
              <MdDelete />
              Delete
            </button>
          </ul>
        </div>
        </div>
       
    );
};

export default Conversation;



