import React, { useEffect, useState } from 'react';
import useAxioSequre from '../../../Hooks/useAxiosSequre';
import { useQuery } from '@tanstack/react-query';

const Conversation = ({ data, currentUserId, online}) => {

    // const [userData, setUserData] = useState(null)
    const [axiosSequre] = useAxioSequre();
    const userId = data?.members?.find((id)=>id!==currentUserId)
      console.log(userId)

      const { data: userData = [], refetch } = useQuery(['userData',userId], async () => {
        const res = await axiosSequre.get(`/user/${userId}`)
        return res.data;
    })




    // useEffect(()=> {
  
      
    
    //     fetch(`https://jobstack-backend-teal.vercel.app/user/${userId}`)
    //     .then((res) => res.json())
    //     .then((data) =>{
    //     //    console.log(data)
    //        setUserData(data)
   
    //     })
    //    },[])

    return (
        <div className='flex items-center py-8 border-b border-b-gray-300'>
        <div className='cursor-pointer  items-center' >
            <div>
            {online && <div className=""></div>}
                <img src={userData?.image} className="w-[60px]  h-[60px] rounded-full p-[2px] border border-primary"  alt=""/>
                <span style={{color: online?"#51e790":""}}>{online? "Online" : "Offline"}</span>
                </div>
                <h3 className='text-lg font-semibold'>{userData?.name}</h3>
            {/* <div className='ml-6'>
                <h3 className='text-lg font-semibold'>{userData?.name}</h3>
                <p className='text-sm font-light text-gray-600'>{userData?.email}</p>
            </div> */}
        </div>
    </div>
    );
};

export default Conversation;