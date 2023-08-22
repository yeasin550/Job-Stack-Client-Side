import { useQuery } from "@tanstack/react-query";
import useAxioSequre from "./useAxiosSequre";

const handleButtonDesiable = () => {
  const [axiosSequre] = useAxioSequre();
  const { data: reaquestsend = [] } = useQuery(["reaquestsend"], async () => {
    const res = await axiosSequre.get("/connectrequest");

    return res.data;
  });

  
    return [reaquestsend];
    console.log(reaquestsend);
};

export default handleButtonDesiable;
