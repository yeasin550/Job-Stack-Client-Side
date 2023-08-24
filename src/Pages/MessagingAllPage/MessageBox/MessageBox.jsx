import React, { useEffect, useRef, useState } from 'react';
import { addMessage, getMessages } from '../../../API/MessageRequest';
import { format } from "timeago.js";
import InputEmoji from 'react-input-emoji'


const MessageBox = ({chat, currentUserId, setSendMessage, receivedMessage}) => {

    const [userData, setUserData] = useState(null)
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

   
    useEffect(()=> {

        const userId = chat?.members?.find((id)=>id!==currentUserId)
        // console.log(userId)

        if (chat !== null)

          fetch(`https://jobstack-backend-teal.vercel.app/user/${userId}`)
          .then((res) => res.json())
          .then((data) =>{
            //  console.log(data)
             setUserData(data)
          })
         },[chat, currentUserId])


      // fetch messages
    useEffect(() => {
      const fetchMessages = async () => {
      try {
        const { data } = await getMessages(chat._id);
        setMessages(data);
        // console.log(data)
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) fetchMessages();
  }, [chat]);



    // Always scroll to last Message
    useEffect(()=> {
      scroll.current?.scrollIntoView({ behavior: "smooth" });
    },[messages])
  
    
  const handleChange = (newMessage)=> {
    setNewMessage(newMessage)
  }

  
  // Send Message
  const handleSend = async(event)=> {
    event.preventDefault()
    const message = {
      senderId : currentUserId,
      text: newMessage,
      chatId: chat._id,
  }


  const receiverId = chat?.members?.find((id)=>id!==currentUserId);
  console.log(receiverId)
  
  // send message to socket server
  setSendMessage({...message, receiverId})
  // send message to database
  try {
    const { data } = await addMessage(message);
    setMessages([...messages, data]);
    setNewMessage("");
  }
  catch
  {
    console.log("error")
  }
}


  // Receive Message from parent component
useEffect(()=> {
  console.log("Message Arrived: ", receivedMessage)
  if (receivedMessage !== null && receivedMessage.chatId === chat._id) {
    setMessages([...messages, receivedMessage]);
  }

},[receivedMessage])

const scroll = useRef();

    return (
        <>
            <div className=' bg-gray-200 h-[80px] my-6 rounded-full flex items-center px-14 py-2'>
                <div className='cursor-pointer'> 
            <img src={userData?.image} width={60} height={60} className="rounded-full"  alt=""/> </div>
                <div className='ml-6 mr-auto'>
                    <h3 className='text-lg'>{userData?.name}</h3>
                    <p className='text-sm font-light text-gray-600'>{userData?.email}</p>
                </div>
                <div className='cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-outgoing" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        <line x1="15" y1="9" x2="20" y2="4" />
                        <polyline points="16 4 20 4 20 8" />
                    </svg>
                    <hr />
                </div>
         </div>

        <div className='h-[75%] w-full overflow-scroll shadow-sm'>
            <div className='p-14'>

                {
                    messages?.length > 0 ?
                        messages?.map(( message) => {
                            return (
                                <>
                                <div ref={scroll}
                                 className={`max-w-[45%] overflow-clip rounded-b-xl p-4 mb-6 ${message.senderId === currentUserId ? 'bg-blue-500 text-white rounded-tl-xl ml-auto' : 'bg-gray-300 rounded-tr-xl'} `}>
                                    
                                <p>{message.text}</p> 
                                <div className='text-end'>
                                <span className='text-sm'>{format(message.createdAt)}</span>
                                </div>
                                 </div>
                                <div></div>
                                </>
                            )
                        }) : <div className='text-center text-lg font-semibold mt-24'>No Messages or No Conversation Selected</div>
                }
            </div>
        </div>
        {
            <div className='p-14 w-full flex items-center'>
                <div className="w-full">
              <InputEmoji
                value={newMessage}
                onChange={handleChange}
              />
              {/* <div className="send-button button" onClick = {handleSend}></div> */}
              <input
                type="file"
                name=""
                id=""
                style={{ display: "none" }}
                // ref={imageRef}
              />
            </div>{" "}
                <div className={`ml-4 p-2 cursor-pointer bg-light rounded-full `} onClick = {handleSend}>
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
        }
            
    </>
    );
};

export default MessageBox;