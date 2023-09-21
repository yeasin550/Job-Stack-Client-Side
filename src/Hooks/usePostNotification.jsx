import useAxioSequre from "./useAxiosSequre";
import useNotificationFindEmail from "./useNotificationFindEmail";

const usePostNotification = () => {
    const [singlenotify, refetch] = useNotificationFindEmail();
    const [axiosSequre] = useAxioSequre();
    const postNotification = (notify) => {
        console.log(notify);
        axiosSequre.post('/notification', notify)
            .then(data => {
                if (data.data.insertedId) {
                    refetch();
                }
            })
    }
    return [postNotification];
};

export default usePostNotification;