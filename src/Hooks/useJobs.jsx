import { useQuery } from "@tanstack/react-query";

const useJobs = () => {
  const {
    data: job = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["job"],
    queryFn: async () => {
      const res = await fetch("https://jobstack-backend-teal.vercel.app/job");
      return res.json();
    },
  });

  return [job, loading, refetch];
};

export default useJobs;
