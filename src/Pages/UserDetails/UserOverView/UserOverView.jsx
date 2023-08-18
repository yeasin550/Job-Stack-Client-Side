import React from 'react';
import { FaGraduationCap, FaHome, FaShoppingBag, FaPhone, FaCloudversify } from 'react-icons/fa';

const UserOverView = () => {
    return (
        <>
            <div className='px-6 py-6'>

                {/* user work overview  */}
                 <div className='flex justify-between items-center mt-2'>
                    <div className='flex gap-10'>
                        <FaShoppingBag className='text-2xl text-gray-500'></FaShoppingBag>

                        <h1 className='font-bold font-sans'>React Frontend developr <span>at {'toyota'}</span></h1>
                        
                    </div>
                    <div className="dropdown dropdown-top dropdown-end">
                            <label tabIndex={0} className="btn btn-circle btn-sm text-[20px] font-sans font-bold bg-gray-200  pb-4 mt-2">...</label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white-300 rounded-box w-52">
                                <li><a>Edit Workplace</a></li>
                                <li><a>Delet WorkPlace</a></li>
                            </ul>
                        </div>
                 </div>
                 {/* user education overview  */}
                 <div className='flex justify-between items-center mt-2'>
                    <div className='flex gap-10'>
                        <FaGraduationCap className='text-2xl text-gray-500'></FaGraduationCap>

                        <h1 className='font-bold font-sans'>Studies at University of Scholors</h1>
                        <p>location</p>
                        <p>date</p>
                        
                    </div>
                    <div className="dropdown dropdown-top dropdown-end">
                            <label tabIndex={0} className="btn btn-circle btn-sm text-[20px] font-sans font-bold bg-gray-200  pb-4 mt-2">...</label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white-300 rounded-box w-52">
                                <li><a>Edit Workplace</a></li>
                                <li><a>Delet WorkPlace</a></li>
                            </ul>
                        </div>
                 </div>
                 {/* user current city  */}
                 <div className='flex justify-between items-center mt-2'>
                    <div className='flex gap-10'>
                        <FaHome className='text-2xl text-gray-500'></FaHome>
                        <h1 className='font-bold font-sans'>Lives in location</h1>
                    </div>
                    <div className="dropdown dropdown-top dropdown-end">
                            <label tabIndex={0} className="btn btn-circle btn-sm text-[20px] font-sans font-bold bg-gray-200  pb-4 mt-2">...</label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white-300 rounded-box w-52">
                                <li><a>Edit Workplace</a></li>
                                <li><a>Delet WorkPlace</a></li>
                            </ul>
                        </div>
                 </div>
                 {/* user home city  */}
                 <div className='flex justify-between items-center mt-2'>
                    <div className='flex gap-10'>
                        <FaHome className='text-2xl text-gray-500'></FaHome>
                        <h1 className='font-bold font-sans'>From location</h1>
                    </div>
                    <div className="dropdown dropdown-top dropdown-end">
                            <label tabIndex={0} className="btn btn-circle btn-sm text-[20px] font-sans font-bold bg-gray-200  pb-4 mt-2">...</label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white-300 rounded-box w-52">
                                <li><a>Edit Workplace</a></li>
                                <li><a>Delet WorkPlace</a></li>
                            </ul>
                        </div>
                 </div>
                 {/* user marride Status  */}
                 <div className='flex justify-between items-center mt-2'>
                    <div className='flex gap-10'>
                        <FaCloudversify className='text-2xl text-gray-500'></FaCloudversify>
                        <h1 className='font-bold font-sans'>Single</h1>
                    </div>
                    <div className="dropdown dropdown-top dropdown-end">
                            <label tabIndex={0} className="btn btn-circle btn-sm text-[20px] font-sans font-bold bg-gray-200  pb-4 mt-2">...</label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white-300 rounded-box w-52">
                                <li><a>Edit Workplace</a></li>
                                <li><a>Delet WorkPlace</a></li>
                            </ul>
                        </div>
                 </div>
                 {/* user phone no  */}
                 <div className='flex justify-between items-center mt-2'>
                    <div className='flex gap-10'>
                        <FaPhone className='text-2xl text-gray-500'></FaPhone>
                        <h1 className='font-bold font-sans'>01799846537</h1>
                        <p>mobile</p>
                    </div>
                    <div className="dropdown dropdown-top dropdown-end">
                            <label tabIndex={0} className="btn btn-circle btn-sm text-[20px] font-sans font-bold bg-gray-200  pb-4 mt-2">...</label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white-300 rounded-box w-52">
                                <li><a>Edit Workplace</a></li>
                                <li><a>Delet WorkPlace</a></li>
                            </ul>
                        </div>
                 </div>
                 


            </div>
        </>
    );
};

export default UserOverView;