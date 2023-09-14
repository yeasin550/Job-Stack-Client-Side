import{BiDollarCircle, BiMap} from 'react-icons/bi'
import { Link } from 'react-router-dom';
const JobCard = ({ items }) => {
  console.log(items)

  return (
    <div className="grid lg:grid-cols-2 gap-5 justify-items-center">
      {
      items?.map(item => <div key={item?._id} className="cards rounded-lg">
      <div className="shadow-lg md:h-44 h-full p-4 md:p-6 mt-8 hover:shadow-2xl rounded-md bg-white w-full card">
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-5">
          <div className="mb-4 md:mb-0 md:mr-4">
            <img className="h-20 w-20" src={item?.image} alt="" />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h1 className="md:text-2xl text-lg font-bold">{item?.jobTitle}</h1>
            <h1>
              Company Name:{" "}
              <span className="font-semibold md:text-lg text-[15px]">{item?.companyName}</span>
            </h1>
            <h1>{item?.workplace}</h1>
            <div className="flex flex-col md:flex-row items-center gap-2">
              <h1 className="flex items-center gap-1">
                <BiMap /> {item?.location}
              </h1>
              <h1 className="flex items-center gap-1">
                <BiDollarCircle />
                {item?.salary}/month
              </h1>
            </div>
          </div>
          <div className="mt-4 md:mt-0 text-center md:text-right">
            <div className="">
              <Link to={`/jobApplyForm/${item?._id}`}>
                <button className="px-4 w-32 py-2 banner text-white outline-0 rounded-md font-semibold">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>)
    }
    </div>
  );
};
export default JobCard;
