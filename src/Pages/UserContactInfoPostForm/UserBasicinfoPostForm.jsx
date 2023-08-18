import React, { useContext } from 'react';
import { FaPlus } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';
import useAxioSequre from '../../Hooks/useAxioSequre';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useSingleUser from '../../Hooks/useSingleUser';

const UserBasicinfoPostForm = () => {
    const { user } = useContext(AuthContext);
    const [axiosSequre] = useAxioSequre();
    const [singleUser, refetch] = useSingleUser();
    const {_id} = singleUser[0] || {};
    const { register, handleSubmit, reset,} = useForm();

    const onSubmit = data => {
        const {language, date, month, year,hobbys,gender} = data;
        const basicInfo = {language, date, month, year,hobbys,gender};
        console.log(basicInfo);
        axiosSequre.put(`/basicinfo/${_id}`, basicInfo)
            .then(data => {
                if (data?.data?.modifiedCount){
                    Swal.fire({
                        icon: 'success',
                        title: 'Save Basic INFO',
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
        <div>
            <div className='flex justify-start items-center gap-2 mt-2 mb-2'>
                    <FaPlus className='border-2 border-blue-500 p-1 rounded-full text-[20px] text-blue-500'></FaPlus>
                    <label htmlFor="my_modal_2" className="link text-blue-500">Add Basic Info</label>
                </div>
                <div>
                <input type="checkbox" id="my_modal_2" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                         <div className="modal-action">
                            <label htmlFor="my_modal_2" className="btn btn-circle bg-green-400 absolute top-3 right-3 text-white">X</label>
                         </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Gender</span>
                                </label>
                                <input {...register("gender")} type="text" placeholder="type here" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Language</span>
                                </label>
                                <input {...register("language")} type="text" placeholder="type here" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Hobbys</span>
                                </label>
                                <input {...register("hobbys")} type="text" placeholder="type here" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date Of Birth</span>
                                </label>
                                <div className='flex justify-center items-center gap-5 '>
                                    <input {...register("date")} type="number" placeholder="Date" className="input input-bordered w-full" />
                                    <input {...register("month")} type="number" placeholder="Month" className="input input-bordered w-full" />
                                    <input {...register("year")} type="number" placeholder="Year" className="input input-bordered w-full" />
                                </div>
                            </div>
   
                            <div className="form-control mt-2">
                                <input type="submit" value="Save" className="btn bg-green-500 text-white hover:bg-green-500" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default UserBasicinfoPostForm;