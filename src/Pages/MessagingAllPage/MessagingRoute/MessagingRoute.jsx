import React, {  useContext, useEffect, useRef, useState } from 'react';
import { userChats } from '../../../API/ChatRequest';
import { io } from "socket.io-client";
import MessageBox from '../MessageBox/MessageBox';
import Conversation from '../Conversation/Conversation';
import { AuthContext } from '../../../Providers/AuthProvider';
import useAxioSequre from '../../../Hooks/useAxiosSequre';
import { useQuery } from '@tanstack/react-query';
import LogoSearch from '../LogoSearch/LogoSearch';
import useBaseAPI from '../../../Hooks/useBaseAPI';
import axios from 'axios';
import Swal from 'sweetalert2';


const MessagingRoute = () => {
    
    const  [baseApi] = useBaseAPI()
    const {user} = useContext(AuthContext)
    
    const socket = useRef();

    const [userData, setUserData] = useState([])
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [sendMessage, setSendMessage] = useState(null);
    const [receivedMessage, setReceivedMessage] = useState(null);
   

    const [axiosSequre] = useAxioSequre();
    const { data: userss = []} = useQuery(['userss'], async () => {
     const res = await axiosSequre.get(`/users/${user?.email}`)
     return res.data;
    })
  
    const userI = userss[0]
    console.log(userI)


    useEffect(() =>{
      fetch('https://jobstack-backend-teal.vercel.app/users')
      .then((res) => res.json())
    .then((data) =>{
       console.log(data)
       setUserData(data)
    })
      
    },[])

 const senderId = userI?._id 

 console.log(senderId)

 const { data: chatdata = [], refetch } = useQuery(['chatdata', userI?._id], async () => {
  const res = await baseApi.get(`/chat/${userI?._id}`)
  return res.data;
})



const CreateConversation = async (receiverId) => {
  try {
    const response = await fetch('https://jobstack-backend-teal.vercel.app/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        senderId: senderId,
        receiverId: receiverId,
      }),
    });

    if (response.ok) {
      refetch()
      const result = await response.text();
      console.log(result); 
    } else {
      console.error('Failed to create conversation');
    }
  } catch (error) {
    console.error('Error creating conversation:', error);
  }
}



       // Send Message to socket server

       useEffect(() => {
        if (sendMessage!==null) {
          socket.current.emit("send-message", sendMessage)}
      }, [sendMessage]);
    
    
       // Connect to Socket.io

       useEffect(() => {
        socket.current = io("ws://localhost:8800");
        socket.current.emit("new-user-add", userI?._id);
        socket.current.on("get-users", (users) => {
          setOnlineUsers(users);
          console.log(onlineUsers)
        });
      }, [userI]);


 
      // Get the message from socket server
      useEffect(() => {
        socket.current.on("recieve-message", (data) => {
          console.log(data)
          setReceivedMessage(data)})
        }, []);


    const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== user._id);
    const online = onlineUsers.find((userI) => userI.userId === chatMember);
    return online ? true : false;
  };

    return (
   <>
        <div className='w-screen py-2 mx-auto flex'>

        <div className='w-[22%] h-screen bg-gray-100 overflow-scroll'>
            <div className='flex items-center my-8 mx-14'>
                <div><img src={user?.photoURL} width={50} height={50} className='border border-primary p-[2px] rounded-full'  alt=""/></div>
                <div className='ml-8'>
                    <h3 className='text-2xl'>{user?.displayName}</h3>
                    <p className='text-lg font-light'>{user?.email}</p>
                </div>
            </div>
            <hr />

            <div className='mx-14 mt-10'>
                <div className='text-primary text-lg'>Messages</div>
                <div>
                 {chatdata?.map((chat) => (
                    
              <div
              onClick={() => {
                setCurrentChat(chat); 
              }}     
              >
                <Conversation
                  data={chat}
                  currentUserId={userI?._id}
                  online={checkOnlineStatus(chat)}
                />
              </div>
            ))} 
                
                </div>
            </div>
        </div>



        {/* MESSAGE BOX================================ End */}


        <div className='w-[55%] h-screen bg-white flex flex-col items-center'>
            
                    <MessageBox
                     chat={currentChat}
                     currentUserId={userI?._id}
                     setSendMessage={setSendMessage}
                     receivedMessage={receivedMessage}
                    />
                    </div>

      {/* MESSAGE BOX================================ */}


        <div className='w-[22%] h-screen  bg-gray-50 px-8 py-16 overflow-scroll'><LogoSearch/>
          <hr />
        <div className='text-primary text-lg'>People</div>
        
          {userData.map((users) =>(
             <div
             onClick={() => CreateConversation(users._id)}

             className='cursor-pointer py-8 flex items-center'>
            <img src={users?.image} className="w-[60px]  h-[60px] rounded-full p-[2px] border border-primary"  alt=""/>
              <h3 className='text-lg font-semibold pl-4'>{users?.name}</h3>
            </div>
          ))}
         
            <div>
            </div>
        </div>
    </div>
   </>
    );
};

export default MessagingRoute;