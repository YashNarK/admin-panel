import { FaAngleDown } from "react-icons/fa";

const SkeletonCard = () => {
  return (
    <div className="flex flex-col w-3/4 md:w-1/2 lg:w-1/5 bg-base-300 rounded p-3 my-2 mx-auto">
      <div className="flex flex-col gap-4">
        <div className="skeleton h-4 w-2/3 bg-gray-300"></div>
        <div className="skeleton h-6 w-1/1 bg-gray-300"></div>
      </div>
    </div>
  );
};

const Skeleton = () => {
  const totalSkeletonCount: number[] = [0, 1, 2, 3];
  return (
    <>
      {" "}
      <div className="flex flex-col lg:flex-row justify-evenly">
        {totalSkeletonCount.map((count) => (
          <SkeletonCard key={count} />
        ))}
        <button className="btn btn-ghost my-auto">
          <FaAngleDown />
        </button>
      </div>
      <div className="skeleton w-11/12 h-60 bg-base-300 ml-8 my-4 rounded"></div>
    </>
  );
};

export default Skeleton;
