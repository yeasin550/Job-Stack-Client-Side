import React, {  useContext, useEffect, useRef, useState } from 'react';
import { userChats } from '../../../API/ChatRequest';
import { io } from "socket.io-client";
import MessageBox from '../MessageBox/MessageBox';
import Conversation from '../Conversation/Conversation';
import useSingleUser from '../../../Hooks/useSingleUser';
import { AuthContext } from '../../../Providers/AuthProvider';
import useAxioSequre from '../../../Hooks/useAxiosSequre';
import { useQuery } from '@tanstack/react-query';


const MessagingRoute = () => {

    const {user} = useContext(AuthContext)
    console.log( user)

    const socket = useRef();

    const [chats, setChats] = useState([]);
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


    // const [singleUser] = useSingleUser()
    // console.log(singleUser)


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

      
       
     // Get the chat in chat section
  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(userI?._id);
        setChats(data);
        console.log(data)
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
    
  }, [userI?._id]);


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
                {chats.map((chat) => (
                    
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
            
            {/* <div className='text-center text-lg font-semibold mt-24'>No Conversations</div> */}
                    
                </div>
            </div>
        </div>



        {/* MESSAGE BOX================================ */}


        <div className='w-[55%] h-screen bg-white flex flex-col items-center'>
            
                    <MessageBox
                     chat={currentChat}
                     currentUserId={userI?._id}
                     setSendMessage={setSendMessage}
                     receivedMessage={receivedMessage}
                    />
           
        </div>
        <div className='w-[22%] h-screen bg-gray-200 px-8 py-16 overflow-scroll'>
            <div className='text-primary text-lg'>People</div>
            <div>
                
            </div>
        </div>
    </div>
   </>
    );
};

export default MessagingRoute;