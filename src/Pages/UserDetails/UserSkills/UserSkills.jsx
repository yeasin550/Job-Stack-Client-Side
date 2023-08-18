import React, { useContext } from 'react';
import { FaPlus, FaSlack } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import useAxioSequre from '../../../Hooks/useAxioSequre';
import { AuthContext } from '../../../Providers/AuthProvider';

const UserSkills = () => {
    const { user } = useContext(AuthContext);
    const [axiosSequre] = useAxioSequre();
    const { data: userSkills = [], refetch } = useQuery(['userSkills'], async () => {
        const res = await axiosSequre.get(`/skills/${user?.email}`)
        return res.data;
    })

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const { skill, skillrate } = data;
        const userskills = { skill, skillrate, email: user?.email };
        axiosSequre.post('/skills', userskills)
            .then(data => {
                if (data?.data?.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Save Skills',
                        timer: 1500
                    });
                    reset();
                    refetch();
                }
            })
            .catch(err => {
                console.log(err)
            })
    };

    return (
        <div className='px-10 py-10'>
            <div className='flex flex-col shadowdiv border p-4 rounded-md'>
                <h1 className='text-[20px] font-sans font-semibold'>Skills</h1>

                <div className='flex justify-start items-center gap-2 mt-2 mb-2'>
                    <FaPlus className='border-2 border-blue-500 p-1 rounded-full text-[20px] text-blue-500'></FaPlus>
                    <label htmlFor="my_modal_4" className="link text-blue-500">Add Skills</label>
                </div>
               {
                userSkills?.map(userskill => <div key={userskill?._id} className='flex justify-between items-center mt-2'>
                <div className='flex gap-10'>
                       <FaSlack className='text-2xl text-rose-500'></FaSlack>
                    
                        <h1 className='font-bold font-sans'>{userskill?.skill}</h1>
                        <p>{userskill?.skillrate}</p>
                </div>
                <div className='flex gap-2'>
                    <button className="btn btn-xs bg-green-500 hover:bg-green-700 text-white">Edit</button>
                    <button className="btn btn-xs bg-red-600 hover:bg-rose-700 text-white">Delet</button>
                </div>
            </div> )
               }
            </div>
            <div>
                <input type="checkbox" id="my_modal_4" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                         <div className="modal-action">
                            <label htmlFor="my_modal_4" className="btn btn-circle bg-green-400 absolute top-3 right-3 text-white">X</label>
                         </div>
                        <form  onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Add Skills</span>
                                </label>
                                <input {...register("skill", { required: true })} type="text" placeholder="type here" className="input input-bordered" />
                                {errors.skill && <span className='text-purple-600 animate-pulse'>skill is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">How would you rate yourself on this skill?</span>
                                </label>
                                <select {...register("skillrate", { required: true })} className="select border  border-green-500  w-full ">
                                    <option disabled selected>select</option>
                                    <option>Beginner</option>
                                    <option>Intermediate</option>
                                    <option>Advanced</option>
                                </select>
                                {errors.skillrate && <span className='text-purple-600 animate-pulse'>skillrate is required</span>}
                            </div>
                            <div className="form-control mt-4">
                                <input type="submit" value="Save" className="btn bg-green-500 text-white hover:bg-green-500" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserSkills;