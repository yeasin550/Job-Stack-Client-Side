import React, { useContext } from 'react';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';
import UniversityForm from '../../UserEducationDataPostForm/UniversityForm';
import CollageForm from '../../UserEducationDataPostForm/CollageForm';
import SchollForm from '../../UserEducationDataPostForm/SchollForm';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxioSequre from '../../../Hooks/useAxiosSequre';

const UserEducation = () => {

    const { user } = useContext(AuthContext);
    const [axiosSequre] = useAxioSequre();
    const { data: UserEducation = [], refetch } = useQuery(['UserEducation'], async () => {
        const res = await axiosSequre.get(`/education/${user?.email}`)
        return res.data;
    })

    const universitys = UserEducation.filter(usereducation => usereducation.category === 'university');
    const collages = UserEducation.filter(usereducation => usereducation.category === 'collage');
    const schools = UserEducation.filter(usereducation => usereducation.category === 'school');


    return (
        <div className='px-10 py-10'>
            <div>
                {/* User UniverSitty  */}
                <div className='flex flex-col shadowdiv border p-4 rounded-md'>
                    <h1 className='text-[20px] font-sans font-semibold'>University</h1>
                    <UniversityForm refetch={refetch}></UniversityForm>
                    {
                        universitys.map(university => <div key={university?._id} className='flex justify-between items-center'>
                            <div className='flex gap-4'>
                                
                                    <FaGraduationCap className='text-2xl'></FaGraduationCap>
                                    <h1>{university?.university}</h1>
                                    <div className='flex'>
                                        <p>{university?.startyear}</p>-
                                        <p>{university?.endyear}</p>-
                                        <p>{university?.studentStatus}</p>
                                   </div>
                                <p>{university?.degree}</p>
                            </div>
                            <div className="dropdown dropdown-top dropdown-end">
                                <label tabIndex={0} className="btn btn-circle btn-sm text-[20px] font-sans font-bold bg-gray-200  pb-4  mt-2">...</label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white-300 rounded-box w-52">
                                    <li><a>Edit Workplace</a></li>
                                    <li><a>Delet WorkPlace</a></li>
                                </ul>
                            </div>
                        </div>)
                    }
                </div>
                {/* "Higher Secondary School"  */}
                <div className='flex flex-col shadowdiv border p-4 mt-4 rounded-md'>
                    <h1 className='text-[20px] font-sans font-semibold'>Higher Secondary School</h1>
                    <CollageForm refetch={refetch}></CollageForm>
                    {
                        collages?.map(collage => <div key={collage?._id} className='flex justify-between items-center'>
                            <div className='flex gap-5'>
                                <FaSchool className='text-2xl'></FaSchool>
                                <h1>{collage?.collage}</h1>
                                <div className='flex'>
                                    <p>{collage?.startyear}</p>-
                                    <p>{collage?.endyear}</p>-
                                    <p>{collage?.studentStatus}</p>
                                </div>
                            </div>
                            <div className="dropdown dropdown-top dropdown-end">
                                <label tabIndex={0} className="btn btn-circle btn-sm text-[20px] font-sans font-bold bg-gray-200  pb-4  mt-2">...</label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white-300 rounded-box w-52">
                                    <li><a>Edit Workplace</a></li>
                                    <li><a>Delet WorkPlace</a></li>
                                </ul>
                            </div>

                        </div>)
                    }
                </div>

                {/* User Secondary High Scool  */}
                <div className='flex flex-col shadowdiv border p-4 mt-4 rounded-md'>
                    <h1 className='text-[20px] font-sans font-semibold'>Secondary High Scool</h1>
                    <SchollForm refetch={refetch}></SchollForm>
                    {
                        schools?.map(school => <div key={school?._id} className='flex justify-between items-center'>
                            <div className='flex gap-5'>
                                <FaSchool className='text-2xl'></FaSchool>
                                <h1>{school?.school}</h1>
                                <div className='flex'>
                                    <p>{school?.startyear}</p>-
                                    <p>{school?.endyear}</p>-
                                    <h1>{school?.studentStatus}</h1>
                                </div>
                            </div>
                            <div className="dropdown dropdown-top dropdown-end">
                                <label tabIndex={0} className="btn btn-circle btn-sm text-[20px] font-sans font-bold bg-gray-200  pb-4  mt-2">...</label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white-300 rounded-box w-52">
                                    <li><a>Edit Workplace</a></li>
                                    <li><a>Delet WorkPlace</a></li>
                                </ul>
                            </div>
                        </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default UserEducation;
