import React, {  useContext, useEffect, useRef, useState } from 'react';
import { userChats } from '../../../API/ChatRequest';
import { io } from "socket.io-client";
import MessageBox from '../MessageBox/MessageBox';
import Conversation from '../Conversation/Conversation';
import { AuthContext } from '../../../Providers/AuthProvider';
import useAxioSequre from '../../../Hooks/useAxiosSequre';
import { useQuery } from '@tanstack/react-query';
import LogoSearch from '../LogoSearch/LogoSearch';


const MessagingRoute = () => {

  // const [userI, setUserI] = useState(JSON.parse(localStorage.getItem('user:detail')))

    const {user} = useContext(AuthContext)
    console.log( user)

    const socket = useRef();

    const [chats, setChats] = useState([]);
    const [userData, setUserData] = useState([])
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [sendMessage, setSendMessage] = useState(null);
    const [receivedMessage, setReceivedMessage] = useState(null);
    const [id, setId] = useState(null)


    const [axiosSequre] = useAxioSequre();
    const { data: userss = []} = useQuery(['userss'], async () => {
     const res = await axiosSequre.get(`/users/${user?.email}`)
     return res.data;
    })
  
    
    const userI = userss[0]
    console.log(userI)

    // ===================================================================

    // useEffect(() => {
    //   const fetchChats = async () => {
    //     const res = await fetch(`https://jobstack-backend-teal.vercel.app/api/chat/${userI?.id}`, {
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       }
    //     });
    //     const resData = await res.json()
    //     setConversation(resData)
    //     console.log(resData)
    //   }
    //   fetchChats()
    // }, [])

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

//  const receiver = userData[0]._id
//  console.log(receiver)

// const getId = (id) =>{
//   setId(id)

// }
// console.log(id)

//  const allUsers = userData?.filter(user => !idsToFilter.includes(user.id));

//  const userId = chat?.members?.find((id)=>id!==currentUserId)

//  const receiverId = receiver?.find((id) =>id !== senderId)
//  console.log(receiverId)

const getConversatoin = async (receiverId) => {
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
      const result = await response.text();
      console.log(result); // Conversation created successfully
    } else {
      console.error('Failed to create conversation');
    }
  } catch (error) {
    console.error('Error creating conversation:', error);
  }
}




    // ======================================================================


    // const [singleUser] = useSingleUser()
    // console.log(singleUser)


       // Send Message to socket server

       useEffect(() => {
        if (sendMessage!==null) {
          socket.current.emit("send-message", sendMessage)}
      }, [sendMessage]);
    
    
       // Connect to Socket.io

       useEffect(() => {
        socket.current = io("ws://localhost:8900");
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

      {/* MESSAGE BOX================================ */}



        <div className='w-[22%] h-screen bg-gray-50 px-8 py-16 overflow-scroll'><LogoSearch/>
            <div className='text-primary text-lg'>People</div>
          <hr />
          {userData.map((users) =>(
             <div
             onClick={() => getConversatoin(users._id)}

             className='cursor-pointer flex items-center'>
            <img src={users?.image} className="w-[60px]  h-[60px] rounded-full p-[2px] border border-primary"  alt=""/>
              <h3 className='text-lg font-semibold'>{users?.name}</h3>
  
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