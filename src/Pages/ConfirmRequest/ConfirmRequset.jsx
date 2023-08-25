import SingleRequestCard from "./SingleRequestCard";

const ConfirmRequset = () => {
  return (
    <div>
      <h1 className="my-3">
        Total Connection Request : <b>10</b>{" "}
      </h1>
      <div className="grid  gap-4 lg:grid-cols-4 pb-8 max-h-[650px] overflow-y-auto scroll-pr-2  touch-none">
        <SingleRequestCard />
      </div>
    </div>
  );
};

export default ConfirmRequset;
