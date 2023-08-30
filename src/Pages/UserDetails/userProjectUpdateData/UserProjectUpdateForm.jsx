import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAxioSequre from '../../../Hooks/useAxiosSequre';
import Swal from 'sweetalert2';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const UserProjectUpdateForm = () => {
    const { id } = useParams();
    console.log(id);
    const [axiosSequre] = useAxioSequre();
    const { data: projectdata = [], refetch } = useQuery(['projectdata'], async () => {
        const res = await axiosSequre.get(`/project/${id}`)
        return res.data;
    });
    console.log(projectdata);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const { projectTitle, projectDescription, liveLink, codeLink, duration, workduration } = data;
        const updateInfo = { projectTitle, projectDescription, liveLink, codeLink, duration, workduration };
        axiosSequre.put(`/updateProject/${id}`, updateInfo)
            .then(data => {
                if (data?.data?.modifiedCount) {
                    Swal.fire('Project Details Data Updated');
                    refetch();
                }
            })
    };
    return (
        <div className='mt-20 mb-20 lg:w-1/2 mx-auto relative'>
            <button><FaArrowAltCircleLeft className='text-4xl text-green-600 absolute left-10 top-14'></FaArrowAltCircleLeft></button>
            <form onSubmit={handleSubmit(onSubmit)} className='border shdowdiv p-8 border-green-600'>
                <h1 className='text-2xl text-center font-sans text-green-600 font-bold uppercase mb-3'>Update Your Project Data</h1>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Project Title</span>
                    </label>
                    <input type="text"  {...register("projectTitle")} required placeholder="type here" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Project Description</span>
                    </label>
                    <textarea  {...register("projectDescription")} required placeholder="description" className="textarea textarea-bordered textarea-md w-full " ></textarea>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Project Work Duration</span>
                    </label>
                    <div className='flex justify-start items-center gap-5'>
                        <input  {...register("workduration")} required type="number" placeholder="type here" className="input input-bordered  w-full " />
                        <select  {...register("duration")} required className="select border  border-gray-300  w-full ">
                            <option disabled selected>select</option>
                            <option>days</option>
                            <option>week</option>
                            <option>Month</option>
                        </select>
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Project Live Link</span>
                    </label>
                    <input  {...register("liveLink")} required type="text" placeholder="type here" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Project Code Link</span>
                    </label>
                    <input  {...register("codeLink")} required type="text" placeholder="type here" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <input type="submit" value="Save Changes" className="btn bg-green-500 text-white hover:bg-green-500" />
                </div>
            </form>
        </div>
    );
};

export default UserProjectUpdateForm;