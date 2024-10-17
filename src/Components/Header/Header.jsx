import { NavLink } from "react-router-dom";

const Header = () => {

    const Links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Listed-books">Listed Books</NavLink></li>
        <li><NavLink to="/Pages-to-read">Pages to Read</NavLink></li>
    </>

  return (
    <div className=" mx-20 my-5">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-s dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              
                {Links}

            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-3 menu-horizontal px-1">
            
            {Links}

          </ul>
        </div>
        <div className="navbar-end gap-2">
            <a className="btn btn-outline btn-info font-bold text-xl"> Sign In</a>
          <a className="btn btn-outline btn-success font-bold text-xl">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
