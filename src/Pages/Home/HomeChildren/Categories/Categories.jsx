import React, { useEffect } from "react";
import Card from "./Card";
import { FaLaptop } from "react-icons/fa";
import { SiAzuredataexplorer, SiTaichigraphics } from "react-icons/si";
import { TfiWrite } from "react-icons/tfi";
import { LiaSchoolSolid } from "react-icons/lia";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import { GiTeacher } from "react-icons/gi";
import { Link } from "react-router-dom";
// aso animation
import Aos from "aos";
import "aos/dist/aos.css";

const Categories = () => {
   useEffect(() => {
     Aos.init();
   }, []);
  return (
    <div className="max-w-screen-xl dark:text-black  px-5 mx-auto lg:pt-8">
      <div className="text-center mb-9">
        <h1 className="md:text-4xl text-3xl  dark:text-white font-bold ">Top Categories</h1>
      </div>
      <Link to="jobsroute">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="grid md:grid-cols-4 gap-10 mt-14"
        >
          <Card icon={<FaLaptop />} title={"Web & Software Dev"} num={1200} />
          <Card
            icon={<SiAzuredataexplorer />}
            title={"Data Science & Analitycs"}
            num={1460}
          />
          <Card icon={<BiDollarCircle />} title={"Accounting"} num={1920} />
          <Card
            icon={<TfiWrite />}
            title={"Writing & Translations"}
            num={1700}
          />
          <Card
            icon={<FaChalkboardTeacher />}
            title={"Sales & Marketing"}
            num={1233}
          />
          <Card
            icon={<SiTaichigraphics />}
            title={"Graphics & Design"}
            num={1679}
          />
          <Card icon={<GiTeacher />} title={"Digital Marketing"} num={1280} />
          <Card
            icon={<LiaSchoolSolid />}
            title={"Education & Training"}
            num={1430}
          />
        </div>
      </Link>
    </div>
  );
};

export default Categories;
