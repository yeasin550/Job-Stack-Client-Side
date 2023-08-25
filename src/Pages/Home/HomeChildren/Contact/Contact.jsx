import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
  // store data 
  const [templateParams, setTemplateParams] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });

  // send email function 
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        import.meta.env.VITE_serviceId,
        import.meta.env.VITE_templateKey,
        templateParams,
        import.meta.env.VITE_publicKey
      )
      .then((result) => {
        Swal.fire(
          'Successfully',
          'send email successfully',
          'success'
        )
        // console.log(result.text);
        setTemplateParams({
          user_name: '',
          user_email: '',
          subject: '',
          message: '',
        });
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="max-w-7xl mx-auto mt-8 mb-5 px-3">
      <h1 className="text-green-500 text-xl">Contact with Us</h1>
      <p className="text-black font-bold lg:text-3xl text-2xl mb-4">
        We Are the Best for Your Solutions.
      </p>
      <div className="grid lg:grid-cols-2 gap-4">
        {/* contact from  */}
        <div>
          <form onSubmit={sendEmail}>
            <div className="grid lg:grid-cols-2 gap-2">
              <input
                className="text-xl w-full mb-2 py-3 h-[50px] border-solid border-[#f1f1f1] border-[2px] px-5"
                type="text"
                name="user_name"
                required
                placeholder="Your Name"
                value={templateParams.user_name}
                onChange={(e) =>
                  setTemplateParams({
                    ...templateParams,
                    user_name: e.target.value,
                  })
                }
              />

              <input
                className="text-xl w-full mb-2 py-3 h-[50px] border-solid border-[#f1f1f1] border-[2px] px-5"
                type="email"
                name="user_email"
                required
                placeholder="Your Email Address"
                value={templateParams.user_email}
                onChange={(e) =>
                  setTemplateParams({
                    ...templateParams,
                    user_email: e.target.value,
                  })
                }
              />
            </div>

            <input
              className="text-xl w-full mb-2 py-3 h-[50px] border-solid border-[#f1f1f1] border-[2px] px-5"
              type="text"
              name="subject"
              required
              placeholder="Subject"
              value={templateParams.subject}
              onChange={(e) =>
                setTemplateParams({
                  ...templateParams,
                  subject: e.target.value,
                })
              }
            />

            <textarea
              className="text-xl w-full mb-2 py-3 border-solid border-[#f1f1f1] border-[2px] px-5"
              name="message"
              cols="172"
              rows="10"
              required
        
              placeholder="Write your message..."
              value={templateParams.message}
              onChange={(e) =>
                setTemplateParams({
                  ...templateParams,
                  message: e.target.value,
                })
              }
            ></textarea>

            <button
              type="submit"
              className="btn btn-block bg-green-500 hover:bg-green-400"
            >
              Send Message
            </button>
          </form>
        </div>
        <div>
          {/* Embed Google Map iframe here */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.319252249128!2d90.36612397492569!3d23.80724398659243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c12cd2f41ad5%3A0xd4eb5975120eaff0!2sMirpur%2010%20Bus%20Stand!5e0!3m2!1sen!2sbd!4v1692855712854!5m2!1sen!2sbd"
            className="w-full lg:h-full h-[300px]"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
