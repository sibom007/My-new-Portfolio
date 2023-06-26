import toyworld from "../../../../public/website logo/Toy-world.-ogo.png.png";
import AdventureCampus from "../../../../public/website logo/Screenshot 2023-06-07 045813.png";
import { Link } from "react-router-dom";

const Myproject = () => {
  return (
    <div>
      <h1 className="text-center text-5xl font-bold mt-5 mb-10">
        My Last 3 Project
      </h1>
      <div className="grid md:grid-cols-3 gap-10 shadow">
        {/* toy world */}
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={toyworld} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Toy-World</h2>
            <p>
              Technologies : Tailwind, deisy UI, React, React Router, Dotenv,
              Firebase, Express.js, vercel, Mongodb
            </p>
            <div className="card-actions justify-end">
              <Link to={"/Toydetails"}>
                <button className="btn btn-outline btn-warning">Details</button>
              </Link>
            </div>
          </div>
        </div>
        {/* Chef */}
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="" alt="NOT found" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Satkhira</h2>
            <p>
              Technologies : Tailwind, deisy UI, React, React Router, Dotenv,
              Firebase, Express.js, vercel, Mongodb
            </p>
            <div className="card-actions justify-end">
              <Link to={"/SatkhiraDetails"}>
                <button className="btn btn-outline btn-warning">Details</button>
              </Link>
            </div>
          </div>
        </div>
        {/* Adventure Campus */}
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={AdventureCampus} alt="NOT found" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Adventure Campus</h2>
            <p>
              Technologies : Tailwind, deisy UI, React, React Router, Dotenv,
              Firebase, Express.js, vercel, Mongodb
            </p>
            <div className="card-actions justify-end">
              <Link to={"/AdventureCampusDetails"}>
                <button className="btn btn-outline btn-warning">Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myproject;
