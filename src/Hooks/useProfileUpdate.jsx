import Swal from "sweetalert2";
import useAxioSequre from "./useAxiosSequre";
import useSingleUser from "./useSingleUser";
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const useProfileUpdate = () => {
    const [axiosSequre] = useAxioSequre();
    const [singleUser, refetch] = useSingleUser();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    // update profile image 
    const updateProfileImage = (data) => {
        const formData = new FormData();
        formData.append("image", data.image[0]);
        fetch(img_hosting_url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((imageResponse) => {
                if (imageResponse?.success) {
                    const imgURL = imageResponse.data.display_url;
                    const updateImage = { image: imgURL }
                    axiosSequre.put(`/editprofile/${singleUser[0]?._id}`, updateImage)
                        .then(data => {
                            if (data?.data?.modifiedCount) {
                                Swal.fire('Update Profile Image')
                                refetch();
                            }
                        });
                }
            });
    };

    //  update user name 
    const updateName = (data) => {
        if (data?.name) {
            console.log(data?.name)
            const nameUpdate = { name: data?.name };
            console.log(nameUpdate)
            axiosSequre.put(`/editprofile/${singleUser[0]?._id}`, nameUpdate)
            .then(data => {
                if (data?.data?.modifiedCount) {
                    Swal.fire('Update Name')
                     refetch();
                }
            });
        }
    };

    //  update user locations 
    const updateLocations = (data) => {
        if (data?.currentLocation) {
            const locationsad = { currentLocation: data?.currentLocation };
            console.log(locationsad)
            axiosSequre.put(`/editprofile/${singleUser[0]?._id}`, locationsad)
            .then(data => {
                if (data?.data?.modifiedCount) {
                    Swal.fire('Update Locations')
                    refetch();
                }
            });
        }
    };

    // update user bio 
    const updateBio = (data) => {
        if (data?.bio) {
            const updatesbio = { bio: data?.bio };
            console.log(updatesbio);
            axiosSequre.put(`/editprofile/${singleUser[0]?._id}`, updatesbio)
            .then(data => {
                if (data?.data?.modifiedCount) {
                    Swal.fire('Update Bio')
                    refetch();
                }
            });
        }
    };

    // update user cover photo 
    const updateCoverPhoto = (data) => {
        const formData = new FormData();
        formData.append("image", data.bgImage[0]);
        fetch(img_hosting_url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((imageResponse) => {
                if (imageResponse?.success) {
                    const imgURL = imageResponse.data.display_url;
                    const backgroundImage = { bgImage: imgURL }
                    axiosSequre.put(`/editprofile/${singleUser[0]?._id}`, backgroundImage)
                        .then(data => {
                            if (data?.data?.modifiedCount) {
                                Swal.fire('Update Cover Photo')
                                refetch();
                            }
                        });
                }
            });
    };

    return [updateProfileImage, updateBio, updateLocations, updateName, updateCoverPhoto];
};

export default useProfileUpdate;
