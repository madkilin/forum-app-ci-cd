import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { HeartHandshake } from 'lucide-react';

function Navigation({ auth, handlerLogout }) {
  const { pathname } = useLocation();

  return (
    <div className="w-full flex items-center justify-evenly p-3  bg-[#2E2F31]  shadow-sm">
      <NavLink to="/" className="font-extrabold text-gray-300 text-xl flex gap-1 items-center">
        <HeartHandshake className="h-6 text-yellow-500" />
        <p>
          <span className="text-yellow-500">SILA</span>TURAHIM
        </p>
      </NavLink>
      <ul className="flex items-center gap-14">
        <li>
          <NavLink
            className={`${
              pathname === '/' ? 'bg-gray-300 text-black' : 'text-white'
            } px-3 py-2 rounded-xl  hover:bg-gray-300 hover:text-black `}
            to="/"
          >
            Thread
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`${
              pathname === '/leaderboard' ? 'bg-gray-300 text-black' : 'text-white'
            } px-3 py-2 rounded-xl  hover:bg-gray-300 hover:text-black`}
            to="/leaderboard"
          >
            leaderboard
          </NavLink>
        </li>
        <li>
          <NavLink
            className="px-3 py-2 rounded-xl  hover:bg-red-500 hover:text-black text-red-500"
            to="/leaderboard"
            onClick={handlerLogout}
          >
            Logout
          </NavLink>
        </li>
      </ul>
      {auth ? (
        <div className="flex items-center gap-2">
          <p className="uppercase">{auth?.name}</p>
          <img
            src={auth?.avatar}
            className="rounded-full w-12 h-12 p-[2px] border border-gray-500"
            alt="avatar"
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
Navigation.propTypes = {
  auth: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf([null])]).isRequired,
  handlerLogout: PropTypes.func.isRequired,
};
export default Navigation;
