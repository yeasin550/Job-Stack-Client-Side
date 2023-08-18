import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { FaPlus } from "react-icons/fa";
import useAxioSequre from "../../../Hooks/useAxiosSequre";

const UserProjectSkills = () => {
    const { user } = useContext(AuthContext);
    const [axiosSequre] = useAxioSequre();
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };
    const { data: projectskills = [], refetch } = useQuery(['projectskills'], async () => {
        const res = await axiosSequre.get(`/project/${user?.email}`)
        return res.data;
    })
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const { projectTitle, projectDescription, liveLink, codeLink, duration,workduration } = data;
        const projectinfo = { projectTitle, projectDescription, liveLink, codeLink, email: user?.email, duration, workduration }
        console.log(projectinfo);
        axiosSequre.post('/project', projectinfo)
            .then(data => {
                if (data?.data?.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Save WorkExperians',
                        timer: 1500
                    });
                    reset();
                    refetch();
                }
            })
            .catch(err => {
                setError(err.massage)
            })
    };
    return (
        <div className='px-5 py-5'>
            <div className='flex flex-col shadowdiv border p-4 rounded-md'>
                <h1 className='text-[20px] font-sans font-semibold'>Project</h1>
                <div className='flex justify-start items-center gap-2 mt-2 mb-2'>
                    <FaPlus className='border-2 border-blue-500 p-1 rounded-full text-[20px] text-blue-500'></FaPlus>
                    <label onClick={openModal} className="link text-blue-500">Add Project</label>
                </div>

                {
                    projectskills.map(projectskill => <div key={projectskill?._id} className='profile-shadow border px-4 py-4 mt-2 rounded-lg'>
                    <div className='flex flex-col justify-start items-start'>
                        <h1 className='font bold font-sans text-2xl'>{projectskill?.projectTitle}</h1>
                        <h1 className='link text-blue-500 font-bold font-sans'><span>{projectskill?.workduration}-</span>{projectskill?.duration}</h1>
                        <p>{projectskill?.projectDescription}</p>
                        <h1 className='link text-blue-500 font-bold font-sans'>{projectskill?.liveLink}</h1>
                        <h1 className='link text-blue-500 font-bold font-sans'>{projectskill?.codeLink}</h1>
                    </div>
                    <div className='flex justify-end gap-2 mt-3'>
                        <button className="btn btn-sm bg-green-500 hover:bg-green-700 text-white">Edit</button>
                        <button className="btn btn-sm bg-red-600 hover:bg-rose-700 text-white">Delet</button>
                    </div>
                </div> )
                }
            </div>
            {
                isOpen && (
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle" open >
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="modal-box" >
                            <div className="modal-action">
                                <label onClick={closeModal} className="btn btn-circle absolute right-4 top-3 bg-green-400 text-white">X</label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Project Title</span>
                                </label>
                                <input type="text" {...register("projectTitle", { required: true })} placeholder="type here" className="input input-bordered" />
                                {errors.projectTitle && <span className='text-purple-600 animate-pulse'>projectTitle is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Project Description</span>
                                </label>
                                <textarea {...register("projectDescription", { required: true })} placeholder="description" className="textarea textarea-bordered textarea-md w-full " ></textarea>
                                {errors.projectDescription && <span className='text-purple-600 animate-pulse'>projectDescription is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Project Work Duration</span>
                                </label>
                                <div className='flex justify-start items-center gap-5'>
                                    <input {...register("workduration", { required: true })} type="number" placeholder="type here" className="input input-bordered  w-full " />
                                    {errors.workduration && <span className='text-purple-600 animate-pulse'>workduration is required</span>}
                                    <select {...register("duration", { required: true })} className="select border  border-gray-300  w-full ">
                                        <option disabled selected>select</option>
                                        <option>days</option>
                                        <option>week</option>
                                        <option>Month</option>
                                    </select>
                                    {errors.duration && <span className='text-purple-600 animate-pulse'>duration is required</span>}

                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Project Live Link</span>
                                </label>
                                <input {...register("liveLink", { required: true })} type="text" placeholder="type here" className="input input-bordered" />
                                {errors.liveLink && <span className='text-purple-600 animate-pulse'>liveLink is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Project Code Link</span>
                                </label>
                                <input {...register("codeLink", { required: true })} type="text" placeholder="type here" className="input input-bordered" />
                                {errors.codeLink && <span className='text-purple-600 animate-pulse'>codeLink is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Save" className="btn bg-green-500 text-white hover:bg-green-500" />
                            </div>
                        </form>
                    </dialog >
                )}
        </div>
    );
};

export default UserProjectSkills;