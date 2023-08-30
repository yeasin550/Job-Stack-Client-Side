import React, { useState } from "react";

const JobsCategory = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div>
      <ul className="tabs text-xl font-semibold">
        {/* <li
          className={activeTab === 1 ? "active" : ""}
          onClick={() => handleTabClick(1)}
        >
          All
        </li> */}
        <li
          className={activeTab === 1 ? "active" : ""}
          onClick={() => handleTabClick(1)}
        >
         Front-end 
        </li>
        <li
          className={activeTab === 2 ? "active" : ""}
          onClick={() => handleTabClick(2)}
        >
         Back-end 
        </li>
        <li
          className={activeTab === 3 ? "active" : ""}
          onClick={() => handleTabClick(3)}
        >
          Full Stack
        </li>
      </ul>
    </div>
  );
};

export default JobsCategory;
