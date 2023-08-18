// import React from 'react';
// import useAxioSequre from '../../Hooks/useAxiosSequre';
// // import JobPost from '../../Components/JobPost/JobPost';
// import { useQuery } from '@tanstack/react-query';

// const UserAllJobsData = () => {
//       const [axiosSequre] = useAxioSequre();
//         const { data: userAllJobsPosts = [] } = useQuery( ["userAllJobsPosts"], async () => {
//             const res = await axiosSequre.get("/job");
//             return res.data;
//           }
//         );
//   console.log(userAllJobsPosts);
//     return (
//       <div className="grid sm:grid-cols-1 md:grid-cols-2">
//         fdsfasdfasdf
//         {/* {userAllJobsPosts?.map((posts) => 
//           <JobPost key={posts?._id} posts={posts} />
//         )} */}
//       </div>
//     );
// };

// export default UserAllJobsData;