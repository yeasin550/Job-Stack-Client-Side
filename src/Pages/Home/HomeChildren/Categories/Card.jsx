import React from "react";

const Card = ({ images, icon, title, num }) => {
  return (
    <div>
  <div class="card hover:cursor-pointer card-compact bg-base-100 shadow-xl hover:scale-110 transition-transform duration-300">
    <figure>
      <img class="h-40 w-full" src={images} alt="Image" />
    </figure>
    <div class="card-body">
      <div class="-mt-12 text-white">
        <button class="text-5xl bg-[#00B04D] px-2 py-2 rounded-md">
          {icon}
        </button>
      </div>
      <h2 class="card-title font-bold">{title}</h2>
      <p class="mb-3">
        Posted Jobs:{" "}
        <span class="px-3 py-1 bg-[#00B04D] rounded-md text-white">{num}</span>{" "}
      </p>
    </div>
  </div>
</div>
  );
};

export default Card;
