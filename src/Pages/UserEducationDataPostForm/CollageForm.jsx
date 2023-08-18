import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FaPlus } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';
import useAxioSequre from '../../Hooks/useAxiosSequre';
const CollageForm = ({refetch}) => {
    const { user } = useContext(AuthContext);
    const [axiosSequre] = useAxioSequre();
    const { register, handleSubmit, reset,} = useForm();

    const onSubmit = data => {
        console.log(data);
        const {collage,startyear, endyear,studentStatus} = data;
        const collageInfo = {email: user?.email,collage,startyear, endyear,studentStatus, category:'collage' };
        console.log(collageInfo);
        axiosSequre.post('/education', collageInfo)
            .then(data => {
                if (data?.data?.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Save Collage INFO',
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
                <label htmlFor="my_modal_7" className="link text-blue-500">Add Collage</label>
             </div>
             <div>
                <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                         <div className="modal-action">
                            <label htmlFor="my_modal_7" className="btn btn-circle bg-green-400 absolute top-3 right-3 text-white">X</label>
                         </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Collage</span>
                                </label>
                                <input  {...register("collage", { required: true })} type="text" placeholder="type here" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Time Period</span>
                                </label>
                                <div className='flex justify-center items-center gap-5 '>
                                    <input {...register("startyear", { required: true })} type="text" placeholder="year" className="input input-bordered w-full" />
                                    <p className='font-sans font-bold'>To</p>
                                    <input {...register("endyear", { required: true })} type="text" placeholder="year" className="input input-bordered w-full" />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Select Current Status</span>
                                </label>
                                <select  {...register("studentStatus", { required: true })} className="select border  border-green-500  w-full ">
                                    <option disabled selected>select</option>
                                    <option>Present</option>
                                    <option>Complet</option>
                                </select>
                            </div>
                            <div className="form-control mt-7">
                                <input type="submit" value="Save" className="btn bg-green-500 text-white hover:bg-green-500" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         </div>
    );
};

export default CollageForm;