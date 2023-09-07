import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAxioSequre from '../../../Hooks/useAxiosSequre';
import Swal from 'sweetalert2';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const UserProjectUpdateForm = () => {
    const { id } = useParams();
    //fetch api for single id and project detalis data get
    const [axiosSequre] = useAxioSequre();
    const { data: projectdata = [], refetch } = useQuery(['projectdata'], async () => {
        const res = await axiosSequre.get(`/projects/${id}`)
        return res.data;
    });
    const singleData = projectdata[0];
    //react hooks form
    const { register, handleSubmit } = useForm();
    //project details update form
    const onSubmit = (data) => {
        const { projectTitle, projectDescription, liveLink, codeLink, duration, workduration } = data;
        const updateInfo = { projectTitle, projectDescription, liveLink, codeLink, duration, workduration };
        axiosSequre.put(`/updateProject/${id}`, updateInfo)
            .then(data => {
                if (data?.data?.modifiedCount){
                    refetch();
                    Swal.fire('Project Details Data Updated');
                }
            })
    };
    return (
        <div className=''>
            <div className='mt-20 mb-20 lg:w-1/2 mx-auto relative'>
                <button><FaArrowAltCircleLeft className='text-4xl text-green-600 absolute left-10 top-14'></FaArrowAltCircleLeft></button>
                <form onSubmit={handleSubmit(onSubmit)} className='border  rounded-lg shadowform  p-10 '>
                    <h1 className='text-2xl text-center font-sans text-green-600 font-bold uppercase mb-3'>Update Your Project Data</h1>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-sans font-bold">Project Title</span>
                        </label>
                        <input type="text" defaultValue={singleData?.projectTitle}  {...register("projectTitle")} required placeholder="type here" className="input shadowdiv border-green-200 " />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-sans font-bold">Project Description</span>
                        </label>
                        <textarea  defaultValue={singleData?.projectDescription} {...register("projectDescription")} required placeholder="description" className="textarea shadowdiv border-green-200 textarea-md w-full " ></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-sans font-bold">Project Work Duration</span>
                        </label>
                        <div className='flex justify-start items-center gap-5'>
                            <input  defaultValue={singleData?.workduration}  {...register("workduration")} required type="number" placeholder="type here" className="input shadowdiv border-green-200  w-full " />
                            <select defaultValue={singleData?.duration}  {...register("duration")} required className="select shadowdiv border-green-200  w-full ">
                                <option disabled selected>select</option>
                                <option>days</option>
                                <option>week</option>
                                <option>Month</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-sans font-bold">Project Live Link</span>
                        </label>
                        <input defaultValue={singleData?.liveLink}  {...register("liveLink")} required type="url" pattern="https://.*"  placeholder="https://livesite.com" className="input shadowdiv border-green-200" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-sans font-bold">Project Code Link</span>
                        </label>
                        <input defaultValue={singleData?.codeLink} {...register("codeLink")} required type="url" pattern="https://.*"  placeholder="https://codeLink.com" className="input shadowdiv border-green-200" />
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="Save Changes" className="btn bg-green-600  text-white hover:bg-green-700" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserProjectUpdateForm;


