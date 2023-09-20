import React from "react";
import logo from "../../../assets/logo/Colorful_Modern_K_Letter_Free_Logo-removebg-preview (2).png";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#09867E] text-white">
      <div className="max-w-screen-xl pt-10 px-5 mx-auto dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black">
        <div className="mt-10">
          <div className="grid md:justify-items-center md:grid-cols-4 gap-6">
            <div className="">
              <div className="flex justify-start items-center ml-0">
                <img className="w-12 md:w-16" src={logo} alt="logo" />
                <p className="text-[24px]  font-bold font-sans">JOBSTACK</p>
              </div>
              <p className=" mt-4">
                Sed ut perspiciatis unde omnis istee natus error sit voluptatem
                or have accusantiu doloremque laudantium
              </p>
            </div>
            <div className="mt-5 md:mt-0">
              <h1 className="text-lg font-bold mb-3 uppercase">Useful Link</h1>
              <p>
                <Link to="" className="hover:underline text-lg">
                  About Us
                </Link>
              </p>
              <p>
                <Link to="" className="hover:underline text-lg">
                  Services
                </Link>
              </p>
              <p>
                <Link to="" className="hover:underline text-lg">
                  Browse Jobs
                </Link>
              </p>
              <p>
                <Link to="" className="hover:underline text-lg">
                  Candidates
                </Link>
              </p>
              <p>
                <Link to="" className="hover:underline text-lg">
                  Contact Us
                </Link>
              </p>
            </div>
            <div className="mt-5 md:mt-0">
              <h1 className="text-lg font-bold mb-3 uppercase">NETWORK</h1>
              <p>
                <Link to="" className="hover:underline text-lg">
                  Job Search
                </Link>
              </p>
              <p>
                <Link to="" className="hover:underline text-lg">
                  Add a Job
                </Link>
              </p>
              <p>
                <Link to="" className="hover:underline text-lg">
                  Add a Resume / CV
                </Link>
              </p>
              <p>
                <Link to="" className="hover:underline text-lg">
                  Employer Edit Profile
                </Link>
              </p>
              <p>
                <Link to="" className="hover:underline text-lg">
                  Employer Dashboard
                </Link>
              </p>
            </div>
            <div className="mt-5 md:mt-0">
              <h1 className="text-lg font-bold mb-3 uppercase">Contact</h1>
              <p>
                <Link
                  to=""
                  className="hover:underline text-lg flex gap-2 items-center"
                >
                  <FaPhoneAlt /> +880 1345678910
                </Link>
              </p>
              <p>
                <Link
                  to=""
                  className="hover:underline text-lg flex gap-2 items-center"
                >
                  <FaEnvelope /> info.jobstack@gmail.com
                </Link>
              </p>
              <div className="flex items-center gap-2 text-sm mt-6">
                <a
                  className="rounded-full p-2 bg-[#4267B2] text-white"
                  href="https://web.facebook.com/mdyeasinmia570/"
                  target="_blank"
                >
                  <FaFacebook />
                </a>
                <a
                  className="rounded-full p-2 bg-[#1DA1F2] text-white"
                  href="https://twitter.com/Md_Yeasin_Mia"
                  target="_blank"
                >
                  <FaTwitter />
                </a>
                <a
                  className="rounded-full p-2 bg-[#0e76a8] text-white"
                  href=""
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
                <a
                  className="rounded-full p-2 bg-[#833AB4] text-white"
                  href=""
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 font-bold">
          <hr />
        </div>
        <p className="text-center mt-7 text-sm pb-4">
          Copyright &copy; 2023 Job-Stack, All rights reserved By Hexa-Coders
          Team
        </p>
      </div>
    </div>
  );
};

export default Footer;
