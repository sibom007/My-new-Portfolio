import { NavLink } from "react-router-dom";
import Download from "../../page/Downloadbutton/Download";

const Nav = () => {
  const navber = (
    <div className="md:flex md:space-x-5 items-center">
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "text-blue-500" : "default")}
      >
        {" "}
        <li>Home</li>
      </NavLink>
      <NavLink
        to={"/myproject"}
        className={({ isActive }) => (isActive ? "text-blue-500" : "default")}
      >
        <li>My project</li>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-blue-500" : "default")}
        to={
          "https://drive.google.com/file/d/1fXIkD418eT5LG0AGDJhUActiLIM7jRXm/view?usp=drive_link"
        }
      >
        <li>My Resume</li>
      </NavLink>
    </div>
  );

  return (
    <div>
      <div className="navbar bg-blue-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden z-40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <div className="avatar hidden md:block ">
              <div className="w-12  rounded-xl ">
                <img src="https://i.ibb.co/MkJ295w/Main-photo.jpg" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navber}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Sibom saha</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-7 font-semibold">
            {navber}
          </ul>
        </div>
        <div className="navbar-end">
          <Download />
        </div>
      </div>
    </div>
  );
};

export default Nav;
