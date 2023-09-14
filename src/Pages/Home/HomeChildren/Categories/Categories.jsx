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
    <div className="md:py-28 py-14 banner lg:px-14 px-4">
      <div className="text-center mb-9">
        <h1 className="md:text-4xl uppercase text-transparent bg-clip-text  bg-gradient-to-r from-white to-yellow-400 text-3xl font-bold">
          Top Categories
        </h1>
      </div>
      <Link to="jobsroute">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="grid md:grid-cols-4 gap-10 mt-14"
        >
          <Card icon={<FaLaptop />} title={"Web & Software Dev"} num={12} />
          <Card
            icon={<SiAzuredataexplorer />}
            title={"Data Science & Analitycs"}
            num={14}
          />
          <Card icon={<BiDollarCircle />} title={"Accounting"} num={19} />
          <Card icon={<TfiWrite />} title={"Writing & Translations"} num={17} />
          <Card
            icon={<FaChalkboardTeacher />}
            title={"Sales & Marketing"}
            num={33}
          />
          <Card
            icon={<SiTaichigraphics />}
            title={"Graphics & Design"}
            num={16}
          />
          <Card icon={<GiTeacher />} title={"Digital Marketing"} num={18} />
          <Card
            icon={<LiaSchoolSolid />}
            title={"Education & Training"}
            num={30}
          />
        </div>
      </Link>
    </div>
  );
};

export default Categories;
