import React, { useContext } from 'react';
import { FaPlus, FaShoppingBag } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxioSequre from '../../../Hooks/useAxioSequre';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const UserWork = () => {
    const { user } = useContext(AuthContext);
    const [axiosSequre] = useAxioSequre();
    const { data: workexperians = [], refetch } = useQuery(['workexperians'], async () => {
        const res = await axiosSequre.get(`/works/${user?.email}`)
        return res.data;
    })

    // user work experians post database 
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

     const onSubmit = data => {
        console.log(data);
        const { company, position, location, description, workstatus, startyear, endYear } = data;
        const workexprians = { company, position, location, description, workstatus, startyear, endYear, email: user?.email };
        console.log(workexprians);
        axiosSequre.post('/works', workexprians)
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
                console.log(err.massage)
            })
    };

    return (
        <div className='px-10 py-10'>
            <div className='flex flex-col shadowdiv border p-4 rounded-md'>
                <h1 className='text-[20px] font-sans font-semibold'>Work</h1>
                <div className='flex justify-start items-center gap-2 mt-2'>
                    <FaPlus className='border-2 border-blue-500 p-1 rounded-full text-[20px] text-blue-500'></FaPlus>
                    <label htmlFor="my_modal_5" className="link text-blue-500">Add Work Experians</label>
                </div>
                <div className='mt-4'>
                    {
                        workexperians?.map(experians => <div key={experians?._id} className='flex justify-between items-center mt-4'>
                            <div className='flex gap-5'>
                                <FaShoppingBag className='text-2xl'></FaShoppingBag>
                                <div>
                                    <h1>{experians?.position} at <span className='font-bold font-sans'>{experians?.company}</span></h1>
                                    <p>{experians?.startyear}-<span>{experians?.endYear}-</span><span>{experians?.workstatus} </span><span>{experians?.location}</span></p>
                                    <p>{experians.description}</p>
                                </div>
                            </div>
                            <div className="dropdown dropdown-top dropdown-end">
                                <label tabIndex={0} className="btn btn-circle text-[20px] font-sans font-extrabold bg-gray-200 p-2 pb-5 mt-2">...</label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white-300 rounded-box w-52">
                                    <li><a>Edit Workplace</a></li>
                                    <li><a>Delet WorkPlace</a></li>
                                </ul>
                            </div>

                        </div>)
                    }
                </div>
            </div>
            <div>
                <input type="checkbox" id="my_modal_5" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <div className="modal-action">
                            <label htmlFor="my_modal_5" className="btn btn-circle bg-green-400 absolute top-3 right-3 text-white">X</label>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* company  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Company</span>
                                </label>
                                <input {...register("company", { required: true })} type="text" placeholder="type here" className="input input-bordered" />
                                {errors.company && <span className='text-purple-600 animate-pulse'>company is required</span>}
                            </div>
                            {/* positions  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Positions</span>
                                </label>
                                <input {...register("position", { required: true })} type="text" placeholder="type here" className="input input-bordered w-full" />
                                {errors.position && <span className='text-purple-600 animate-pulse'>position is required</span>}
                            </div>
                            {/* city/town*/}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">city/town</span>
                                </label>
                                <input {...register("location", { required: true })} type="text" placeholder="type here" className="input input-bordered w-full" />
                                {errors.location && <span className='text-purple-600 animate-pulse'>location is required</span>}
                            </div>
                            {/* description*/}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea {...register("description", { required: true })} className="textarea textarea-bordered w-full" placeholder=""></textarea>
                                {errors.description && <span className='text-purple-600 animate-pulse'>description is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Currently work</span>
                                </label>
                                <select {...register("workstatus", { required: true })} className="select border  border-green-500  w-full ">
                                    <option disabled selected>select</option>
                                    <option>yes</option>
                                    <option>No</option>
                                </select>
                                {errors.workstatus && <span className='text-purple-600 animate-pulse'>workstatus is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Time Period</span>
                                </label>
                                <div className='flex justify-center items-center gap-5 '>
                                    <input {...register("startyear", { required: true })} type="number" placeholder="year" className="input input-bordered w-full" />
                                    <p className='font-sans font-bold'>To</p>
                                    <input {...register("endYear", { required: true })} type="number" placeholder="year" className="input input-bordered w-full" />
                                </div>
                                {errors.startyear && <span className='text-purple-600 animate-pulse'>startyear is required</span>}
                                {errors.endYear && <span className='text-purple-600 animate-pulse'>endYear is required</span>}
                            </div>

                            <div className="form-control mt-5">
                                <input type="submit" value="Save" className="btn bg-green-500 text-white hover:bg-green-500" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserWork;