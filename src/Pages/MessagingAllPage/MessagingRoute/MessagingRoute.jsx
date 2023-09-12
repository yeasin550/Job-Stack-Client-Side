import React, { useContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import MessageBox from "../MessageBox/MessageBox";
import Conversation from "../Conversation/Conversation";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxioSequre from "../../../Hooks/useAxiosSequre";
import { useQuery } from "@tanstack/react-query";
import useBaseAPI from "../../../Hooks/useBaseAPI";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiSearch } from "react-icons/bi";
import "swiper/css";
import "./message.css";
import { useLocation } from "react-router-dom";
import UseScrollTop from "../../../Hooks/UseScrollTop";

const MessagingRoute = () => {
  const [baseApi] = useBaseAPI();
  const { user } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const socket = useRef();

  const { pathname } = useLocation();
  UseScrollTop(pathname);

  const [userData, setUserData] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);

  const [axiosSequre] = useAxioSequre();
  const { data: userss = [] } = useQuery(["userss"], async () => {
    const res = await axiosSequre.get(`/users/${user?.email}`);
    return res.data;
  });

  const userI = userss[0];
  console.log(userI);

  useEffect(() => {
    fetch("https://jobstack-backend-teal.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserData(data);
      });
  }, []);

  const senderId = userI?._id;

  console.log(senderId);

  const { data: chatdata = [], refetch } = useQuery(
    ["chatdata", userI?._id],
    async () => {
      const res = await baseApi.get(`/chat/${userI?._id}`);
      return res.data;
    }
  );

  // ============== Chat Delete =====================

  const handleDeleteChat = (id) => {
    console.log(id);
    fetch(`https://chat-app-project-server.vercel.app/deletechat/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const updateChat = chatdata?.filter((chat) => chat._id !== data._id);
        setCurrentChat(updateChat);
        refetch();
      });
  };

  const CreateConversation = async (receiverId) => {
    try {
      const response = await fetch(
        "https://jobstack-backend-teal.vercel.app/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            senderId: senderId,
            receiverId: receiverId,
          }),
        }
      );

      if (response.ok) {
        refetch();
        const result = await response.text();
        console.log(result);
      } else {
        console.error("Failed to create conversation");
      }
    } catch (error) {
      console.error("Error creating conversation:", error);
    }
  };

  // Send Message to socket server

  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  // Connect to Socket.io

  useEffect(() => {
    socket.current = io("https://socket-server-hp7i.onrender.com");
    // socket.current = io("ws://localhost:8900");
    socket.current.emit("new-user-add", userI?._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
      console.log(onlineUsers);
    });
  }, [userI]);

  // Get the message from socket server
  useEffect(() => {
    socket.current.on("recieve-message", (data) => {
      console.log(data);
      setReceivedMessage(data);
    });
  }, []);

  const handleSearch = () => {
    fetch(`https://jobstack-backend-teal.vercel.app/users-search/${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserData(data);
      });
  };

  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== user._id);
    const online = onlineUsers.find((userI) => userI.userId === chatMember);
    return online ? true : false;
  };

  return (
    <>
      <div className="w-full h-[100%] shadowdiv rounded-lg md:flex">
        <div className="md:w-[30%]  bg-gray-100 px-6 overflow-scroll">
          <div className="font-bold mt-6 pl-4 text-2xl">Chats</div>
          <div className="">
            <div className="py-6 flex items-center">
              <input
                type="text"
                placeholder="Search Messages or Users"
                onChange={(e) => setSearch(e.target.value)}
                className="bg-gray-300 px-6 py-3 w-full outline-none rounded"
              />
              <BiSearch
                onClick={handleSearch}
                className="h-[30px] w-[30px] items-end cursor-pointer -ml-12"
              />
            </div>
          </div>
          <hr />
          <div>
            <Swiper
              slidesPerView={4}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
            >
              {userData.map((users) => (
                <div className="px-4">
                  <SwiperSlide>
                    <div>
                      <div
                        onClick={() => CreateConversation(users._id)}
                        className="cursor-pointer py-4 items-center h-[100px] w-[100px] "
                      >
                        <img
                          src={users?.image}
                          className="w-[45px]  h-[45px] rounded-full p-[2px] border border-primary"
                          alt=""
                        />
                        <h6 className="pt-3">{users?.name}</h6>
                      </div>

                      <div></div>
                    </div>
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
          </div>

          <hr />
          <div className="mx-4 mt-4">
            <div className="font-medium text-xl">Recent</div>
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
                    handleDeleteChat={handleDeleteChat}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MESSAGE BOX================================ End */}

        <div className="md:w-[69%] mt-8 md:mt-0 bg-white flex flex-col ">
          <MessageBox
            chat={currentChat}
            currentUserId={userI?._id}
            setSendMessage={setSendMessage}
            receivedMessage={receivedMessage}
            handleDeleteChat={handleDeleteChat}
          />
        </div>

        {/* MESSAGE BOX================================ */}
      </div>
    </>
  );
};

export default MessagingRoute;
