import React from "react";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto mt-8 mb-5 px-5">
      <h1 className="text-green-500 text-xl">Contact with Us</h1>
      <p className="text-black font-bold text-3xl mb-4">
        We Are Best About This Job <br /> Solution.
      </p>
      <div className="grid lg:grid-cols-2 gap-4">
        <div>
          <form action="">
            <div className="grid lg:grid-cols-2 gap-2">
              <input
                className="text-xl w-full mb-2 py-3 h-[50px] border-solid border-[#f1f1f1] border-[2px] px-5"
                type="text"
                name="name"
                placeholder="Your Name"
              />
              <input
                className="text-xl w-full mb-2 py-3 h-[50px] border-solid border-[#f1f1f1] border-[2px] px-5"
                type="text"
                name="email"
                placeholder="Your Email Address"
              />
            </div>
            <input
              className="text-xl w-full mb-2 py-3 h-[50px] border-solid border-[#f1f1f1] border-[2px] px-5"
              type="text"
              name="subject"
              placeholder="Subject"
            />
            <textarea
              className="text-xl w-full mb-2 py-3 border-solid border-[#f1f1f1] border-[2px] px-5"
              name=""
              id=""
              cols="172"
              rows="10"
              placeholder="write your message"
            ></textarea>
          </form>
          <button className="btn btn-block bg-green-500 hover:bg-green-400">
            Send Message
          </button>
        </div>
        <div>
          <img
            className="h-[490px] w-[500px]"
            src="https://i.ibb.co/ry90KTN/carte-du-monde-rendu-3d-carte-topographique-couleur-bordure-noms-des-villes.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
