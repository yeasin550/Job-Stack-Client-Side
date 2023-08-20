import useAxioSequre from "./useAxiosSequre";
import useSelfPostfindEmail from "./useSelfPostfindEmail";

const useDeletSelfPost = () => {
    const [axiosSequre] = useAxioSequre();
    const [refetch] = useSelfPostfindEmail();
    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSequre.delete(`/selfpost/${_id}`)
                    .then((data) => {
                        if (data?.data.deletedCount > 0) {
                            refetch();
                            Swal.fire("Deleted!", "Your Post has been deleted.", "success");
                        }
                    });
            }
        });
    }
    return [handleDelete];
};

export default useDeletSelfPost;