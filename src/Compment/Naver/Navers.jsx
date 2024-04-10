import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navers = () => {
  const { user, LogOutUser } = useContext(AuthContext);

  const handileLogOut = () => {
    LogOutUser()
      .then(res => {
        console.log(res.user);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const navLInks = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/property'}>Your Property</NavLink>
      </li>
      <li>
        <NavLink to={'/profile'}>Update Profile</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={'/userProfile'}>User Profile</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="w-[88%] mx-auto ">
      <div className="navbar bg-base-100  ">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLInks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl md:text-3xl lg:text-4xl gap-0 font-extrabold ">
            Home<span className="text-[#FF9638]">Haven</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{navLInks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="dropdown dropdown-end z-10">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={
                        user?.photoURL ||
                        'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      {user?.displayName || 'Name not found'}
                    </a>
                  </li>

                  <li onClick={handileLogOut}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Link to={'/login'}>
              <a className="btn">Login</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navers;
