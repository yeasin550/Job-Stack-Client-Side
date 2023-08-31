import React from 'react';
import logo from '../../../assets/logo/job-stack.png'

import './LogoSearch.css'


const LogoSearch = () => {
    return (
        <div className="LogoSearch">
        <img src={logo} width={50} height={50} alt="" />
        <div className="Search">
            <input type="text" placeholder="#Explore"/>
            <div className="s-icon">
                  {/* <UilSearch/> */}
            </div>
        </div>
      </div>
    );
};

export default LogoSearch;