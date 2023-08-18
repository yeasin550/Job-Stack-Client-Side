import React from "react";
import Card from "./Card";
import { FaLaptop, FaHeadphonesAlt } from "react-icons/fa";
import { LuBus } from "react-icons/lu";
import { LiaSimCardSolid } from "react-icons/lia";
import { FaChalkboardTeacher } from "react-icons/fa";
import { VscGraphLine } from "react-icons/vsc";
import { GiTeacher } from "react-icons/gi";
import { PiSimCardFill } from "react-icons/pi";
import softer from '../../../../assets/categories images/IT Software.jpg'
import Delivery from "../../../../assets/categories images/delivery.jpg";
import Sales from "../../../../assets/categories images/customercare.jpg";
import Call from "../../../../assets/categories images/receptionist.jpg";
import Teacher from "../../../../assets/categories images/teacher.jpg";
import Theme from "../../../../assets/categories images/development.jpg";
import Designer from "../../../../assets/categories images/designer.jpg";
import Software from "../../../../assets/categories images/software.jpg";

const Categories = () => {
  return (
    <div className="max-w-screen-xl px-5 mx-auto pt-28">
      <div className="text-center mb-9">
        <h1 className="text-5xl font-bold ">Categories</h1>
        <p className="mt-5 text-lg">
          Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-8">
        <Card
          images={softer}
          icon={<FaLaptop />}
          title={"IT Software"}
          num={1200}
        />
        <Card
          images={Delivery}
          icon={<LuBus />}
          title={"Delivery Jobs"}
          num={1460}
        />
        <Card
          images={Sales}
          icon={<VscGraphLine />}
          title={"Sales Market"}
          num={1920}
        />
        <Card
          images={Call}
          icon={<FaHeadphonesAlt />}
          title={"Call Center"}
          num={1700}
        />
        <Card
          images={Teacher}
          icon={<FaChalkboardTeacher />}
          title={"Tutor/Teacher"}
          num={1233}
        />
        <Card
          images={Theme}
          icon={<LiaSimCardSolid />}
          title={"Theme Build"}
          num={1679}
        />
        <Card
          images={Designer}
          icon={<GiTeacher />}
          title={"UI Designer"}
          num={1280}
        />
        <Card
          images={Software}
          icon={<PiSimCardFill />}
          title={"Software Making"}
          num={1430}
        />
      </div>
    </div>
  );
};

export default Categories;
