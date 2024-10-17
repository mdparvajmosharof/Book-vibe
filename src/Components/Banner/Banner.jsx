import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className=" mx-20 flex justify-between items-center bg-gray-300 py-24 p-20 rounded-xl">
      <div className="">
        <h1 className="text-6xl font-bold flex flex-col -space-y-4"><span>Books to freshen up </span><br /> <span className="">your bookshelf</span></h1>
        <Link to="/Listed-books"><button className="btn btn-success text-xl  text-white font-bold mt-16">View The List</button></Link>
      </div>
      <div className="">
        <img className="w-[300px] rounded-xl" src="/images/2.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
