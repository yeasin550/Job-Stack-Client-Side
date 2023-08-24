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


    const [singleUser] = useSingleUser()
    console.log(singleUser)


    // const userI = singleUser?.map(e => console.log(e))

    // if (!userI) {
    //     return <span className="loading loading-bars loading-lg"></span>;
    //   }

       // Send Message to socket server
    useEffect(() => {
        if (sendMessage!==null) {
          socket.current.emit("send-message", sendMessage)}
      }, [sendMessage]);
  
     
       // Connect to Socket.io
  useEffect(() => {
    socket.current = io("http://localhost:8800");
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
           
            {/* {
                
                <div className='p-14 w-full flex items-center'>
                    <Input placeholder='Type a message...' value='' onChange={(e) => setMessage(e.target.value)} className='w-[75%]' inputClassName='p-4 border-0 shadow-md rounded-full bg-light focus:ring-0 focus:border-0 outline-none' />
                    <div className={`ml-4 p-2 cursor-pointer bg-light rounded-full ${'pointer-events-none'}`} onClick={() => sendMessage()}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                            <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
                        </svg>
                    </div>
                    <div className={`ml-4 p-2 cursor-pointer bg-light rounded-full ${'pointer-events-none'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="12" cy="12" r="9" />
                            <line x1="9" y1="12" x2="15" y2="12" />
                            <line x1="12" y1="9" x2="12" y2="15" />
                        </svg>
                    </div>
                </div>
            } */}
        </div>
        <div className='w-[22%] h-screen bg-gray-200 px-8 py-16 overflow-scroll'>
            <div className='text-primary text-lg'>People</div>
            <div>
                {/* {
                    users.length > 0 ?
                        users.map(({ user }) => {
                            console.log(user)
                            return (
                                <div className='flex items-center py-8 border-b border-b-gray-300'>
                                    <div className='cursor-pointer flex items-center' onClick={() => fetchMessages('new', user)}>
                                        <div><img src='' className="w-[60px] h-[60px] rounded-full p-[2px] border border-primary"  alt=""/></div>
                                        <div className='ml-6'>
                                            <h3 className='text-lg font-semibold'>'</h3>
                                            <p className='text-sm font-light text-gray-600'>dfdfd</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : <div className='text-center text-lg font-semibold mt-24'>No Conversations</div>
                } */}
            </div>
        </div>
    </div>
   </>
    );
};

export default MessagingRoute;