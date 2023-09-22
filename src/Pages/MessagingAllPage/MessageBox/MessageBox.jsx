import React, { useEffect, useRef, useState } from "react";
import { addMessage, getMessages } from "../../../API/MessageRequest";
import { format } from "timeago.js";
import InputEmoji from "react-input-emoji";
import { BiSolidPhoneCall, BiSolidVideo, BiUser } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "../../../assets/images/images.jpg";
import { MdDelete } from "react-icons/md";
import "./MessageBox.css";

const MessageBox = ({
  chat,
  currentUserId,
  setSendMessage,
  handleDeleteChat,
  receivedMessage,
}) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isDivVisible, setIsDivVisible] = useState(null);

  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUserId);
    console.log(userId);

    if (chat !== null)
      fetch(`https://jobstack-backend-teal.vercel.app/user/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          //  console.log(data)
          setUserData(data);
        });
  }, [chat, currentUserId]);

  // fetch messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await getMessages(chat._id);
        setMessages(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) fetchMessages();
  }, [chat]);

  const handleDeleteMessage = (id) => {
    fetch(`https://chat-app-project-server.vercel.app/deletemessage/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const updateMessage = messages?.filter(
          (message) => message._id !== data._id
        );
        setMessages(updateMessage);
      });
  };

  // Always scroll to last Message
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleChange = (newMessage) => {
    setNewMessage(newMessage);
  };

  // Send Message
  const handleSend = async (event) => {
    event.preventDefault();
    const message = {
      senderId: currentUserId,
      text: newMessage,
      chatId: chat._id,
    };

    const receiverId = chat?.members?.find((id) => id !== currentUserId);
    console.log(receiverId);

    // send message to socket server
    setSendMessage({ ...message, receiverId });
    // send message to database
    try {
      const { data } = await addMessage(message);
      setMessages([...messages, data]);
      setNewMessage("");
    } catch {
      console.log("error");
    }
  };

  // Receive Message from parent component
  useEffect(() => {
    console.log("Message Arrived: ", receivedMessage);
    if (receivedMessage !== null && receivedMessage.chatId === chat._id) {
      setMessages([...messages, receivedMessage]);
    }
  }, [receivedMessage]);

  //  ===========Mouse Handle================

  const handleMouseEnter = (id) => {
    
    setIsDivVisible(id);
  };

  const handleMouseLeave = (id) => {
   
    setIsDivVisible(id);
  };

  const scroll = useRef();

  return (
    <>
      <div className="mt-8 px-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center mb-6 pl-4">
            <img
              src={userData && userData ? userData.image : Image}
              className="w-[60px]  h-[60px] rounded-full p-[1px] border border-primary"
              alt=""
            />
            <h1 className="pl-4 font-medium text-xl">{userData?.name}</h1>
          </div>
          <div className="items-end text-end flex">
            <BiSolidPhoneCall className="h-[25px] w-[25px] mr-6 cursor-pointer" />
            <BiSolidVideo className="h-[25px] w-[25px] mr-6 cursor-pointer" />
            <BiUser className="h-[25px] w-[25px] mr-6 cursor-pointer" />
            <div className="dropdown dropdown-left mr-12 cursor-pointer">
              <label tabIndex={0}>
                <BsThreeDotsVertical />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box "
              >
                <button
                  onClick={() => handleDeleteChat(chat?._id)}
                  className="flex items-center gap-1 text-lg dark:text-black hover:bg-slate-200 w-full py-1 rounded-lg ps-2 font-semibold"
                >
                  <MdDelete />
                  Delete
                </button>
              </ul>
            </div>
          </div>
        </div>
        <hr className="" />
      </div>

      <div className="h-[75%] w-full overflow-scroll shadow-sm">
        <div className="p-6">
          {messages?.length > 0 ? (
            messages?.map((message) => {
              return (
                <>
                  <div
                    ref={scroll}
                    onMouseEnter={handleMouseEnter}
                    className={`max-w-[45%] relative rounded-b-xl p-4 mb-6 ${
                      message.senderId === currentUserId
                        ? " text-white bg-[#09867E] rounded-tl-xl ml-auto"
                        : "bg-chat rounded-tr-xl"
                    } `}
                  >
                    <div className="relative">
                      <div
                        className={` ${
                          message.senderId === currentUserId
                            ? " absolute -left-20"
                            : " absolute -right-20"
                        } `}
                      >
                        <button
                          className={`btn ${
                            isDivVisible && message?._id ? "block" : "hidden"
                          } `}
                          onClick={() => handleDeleteMessage(message?._id)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <MdDelete className="w-5 h-5" />
                        </button>
                      </div>

                      {/* ===============Message======== */}

                      <p className="message-text">{message.text}</p>
                      <div className="text-end">
                        <span className="text-xs ">
                          {format(message.createdAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <div className="text-center mt-32 text-lg font-semiboldmt-24">
              No Conversation Selected
            </div>
          )}
        </div>
      </div>
      {
        <div className="p-6 w-full flex items-center dark:text-white">
          <div className="w-full drop-shadow-xl p-4">
            <InputEmoji value={newMessage} onChange={handleChange} />

            <input
              type="file"
              name=""
              id=""
              style={{ display: "none" }}
              // ref={imageRef}
            />
          </div>{" "}
          <div
            className={`p-2 cursor-pointer bg-light rounded-full `}
            onClick={handleSend}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-send"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="10" y1="14" x2="21" y2="3" />
              <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
            </svg>
          </div>
          <div
            className={`ml-4 hidden md:block p-2 cursor-pointer bg-light rounded-full ${"pointer-events-none"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-circle-plus "
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
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
