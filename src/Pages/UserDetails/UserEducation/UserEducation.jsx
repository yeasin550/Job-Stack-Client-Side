import React from 'react';
import { FaGraduationCap, FaPlus, FaSchool } from 'react-icons/fa';

const UserEducation = () => {
    return (
        <div className='px-10 py-10'>
            <div>

                {/* User UniverSitty  */}
                <div className='flex flex-col shadowdiv border p-4 rounded-md'>
                    <h1 className='text-[20px] font-sans font-semibold'>University</h1>
                    <div className='flex justify-start items-center gap-2 mt-2 mb-2'>
                      <FaPlus className='border-2 border-blue-500 p-1 rounded-full text-[20px] text-blue-500'></FaPlus>
                      <p className='link text-blue-500 '>Add University</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-5'>
                        <FaGraduationCap className='text-2xl'></FaGraduationCap>
                        <h1>Dhaka Bisso Biddaloi</h1>
                        <p>2019-2023-present</p>
                        </div>
                        <div className='flex gap-2'>
                        <button className="btn btn-sm bg-green-500 hover:bg-green-700 text-white">Edit</button>
                        <button className="btn btn-sm bg-red-600 hover:bg-rose-700 text-white">Delet</button>
                        </div>

                    </div>
                </div>
                {/* "Higher Secondary School"  */}
                <div className='flex flex-col shadowdiv border p-4 mt-4 rounded-md'>
                    <h1 className='text-[20px] font-sans font-semibold'>Higher Secondary School</h1>
                    <div className='flex justify-start items-center gap-2 mt-2 mb-2'>
                      <FaPlus className='border-2 border-blue-500 p-1 rounded-full text-[20px] text-blue-500'></FaPlus>
                      <p className='link text-blue-500 '>Add University</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-5'>
                        <FaSchool className='text-2xl'></FaSchool>
                        <h1>Dhaka Bisso Biddaloi</h1>
                        <p>2019-2023-present</p>
                        </div>
                        <div className='flex gap-2'>
                        <button className="btn btn-sm bg-green-500 hover:bg-green-700 text-white">Edit</button>
                        <button className="btn btn-sm bg-red-600 hover:bg-rose-700 text-white">Delet</button>
                        </div>

                    </div>
                </div>

                {/* User Secondary High Scool  */}
                <div className='flex flex-col shadowdiv border p-4 mt-4 rounded-md'>
                    <h1 className='text-[20px] font-sans font-semibold'>Secondary High Scool</h1>
                    <div className='flex justify-start items-center gap-2 mt-2 mb-2'>
                      <FaPlus className='border-2 border-blue-500 p-1 rounded-full text-[20px] text-blue-500'></FaPlus>
                      <p className='link text-blue-500 '>Add University</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-5'>
                        <FaSchool className='text-2xl'></FaSchool>
                        <h1>Dhaka Bisso Biddaloi</h1>
                        <p>2019-2023-present</p>
                        </div>
                        <div className='flex gap-2'>
                        <button className="btn btn-sm bg-green-500 hover:bg-green-700 text-white">Edit</button>
                        <button className="btn btn-sm bg-red-600 hover:bg-rose-700 text-white">Delet</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserEducation;