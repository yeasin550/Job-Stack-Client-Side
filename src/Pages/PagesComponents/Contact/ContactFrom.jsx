import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import {LuMapPin} from 'react-icons/lu'
import { MdCall } from "react-icons/md";

const ContactFrom = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const form = useRef();

  const onSubmit = () => {
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Message Send Successfully!");
          reset();
        },
        (error) => {
          toast.error(error.message);
        }
      );
  };

  return (
    <div className="max-w-screen-xl px-5 mx-auto my-20">
      <div className="grid md:grid-cols-2 ">
        <div className="">
          <div className="">
            <p className="text-xl font-semibold">GET IN TOUCH</p>
            <h1 className="text-3xl font-bold mt-2">Ready to Get Started?</h1>
          </div>
          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className="card-body -ml-8"
          >
            <div className="form-control -mt-3">
              <label className="label">
                <span className="label-text dark:text-white ">Name</span>
              </label>

              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Your Name"
                className="input input-bordered dark:text-black w-full bg-slate-200"
              />
              {errors.name && (
                <span className="text-red-800">Name is required</span>
              )}
            </div>
            <div className="form-control -mt-3 ">
              <label className="label">
                <span className="label-text dark:text-white ">Phone</span>
              </label>

              <input
                type="number"
                {...register("phone", { required: true })}
                placeholder="Your Phone Number"
                className="input input-bordered dark:text-black w-full bg-slate-200"
              />
              {errors.phone && (
                <span className="text-red-800">phone is required</span>
              )}
            </div>

            <div className="form-control -mt-3">
              <label className="label">
                <span className="label-text dark:text-white ">Email</span>
              </label>

              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered dark:text-black w-full bg-slate-200"
              />
              {errors.email && (
                <span className="text-red-800">Email is required</span>
              )}
            </div>
            <div className="-mt-3">
              <label className="label">
                <span className="label-text dark:text-white ">Message</span>
              </label>
              <textarea
                {...register("message", { required: true })}
                rows="6"
                placeholder="Message"
                className="rounded-md px-3 dark:text-black w-full bg-slate-200"
              ></textarea>
              {errors.message && (
                <span className="text-red-800">Message is required</span>
              )}
            </div>
            <div className="form-control mt-6">
              <input
                className="btn banner text-white"
                type="submit"
                value="Send Message"
              />
            </div>
          </form>
        </div>
        <div className="bg-slate-200 dark:text-black p-6 rounded-md">
          <div className="">
            <p className="text-xl font-semibold">GET IN TOUCH</p>
            <h1 className="text-3xl font-bold mt-2">Ready to Get Started?</h1>
            <p className="mt-5 text-xl text-justify">
              Give us a call or drop by anytime, we endeavour to answer all
              enquiries within 24 hours on business days. We will be happy to
              answer your questions.
            </p>
            <div className=" mt-12">
              <div className="flex items-center gap-3">
                <button className="banner rounded-full p-5 text-3xl text-white ">
                  <LuMapPin />
                </button>
                <div>
                  <h1 className="text-2xl font-semibold">Job-Stack</h1>
                  <p> Westlake Village, CA 91362, United States</p>
                </div>
              </div>
            </div>
            <div className=" mt-12">
              <div className="flex items-center gap-3">
                <button className="banner rounded-full p-5 text-3xl text-white ">
                  <MdCall />
                </button>
                <div>
                  <h1 className="text-2xl font-semibold">+880 1318421921</h1>
                  <p>Give us a call</p>
                </div>
              </div>
            </div>
            <div className=" mt-12">
              <div className="flex items-center gap-3">
                <button className="banner rounded-full p-5 text-3xl text-white ">
                  <LuMapPin />
                </button>
                <div>
                  <h1 className="text-2xl font-semibold">
                    info.jobstack@gmail.com
                  </h1>
                  <p>Get in Touch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.6852537560753!2d-118.80358375394619!3d34.15439374291773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82442c3a86d15%3A0x3de9d75548e527c6!2sJobStack%2C%20Inc!5e0!3m2!1sen!2sbd!4v1693911590342!5m2!1sen!2sbd"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          className="rounded-xl w-full"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactFrom;
