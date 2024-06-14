import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import FormLogin from '../components/_formLogin';
import { asyncSetAuthUser } from '../state/actions/authUser';

function Index() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = ({ event, email, password }) => {
    event.preventDefault();
    dispatch(asyncSetAuthUser({ email, password }));
    navigate('/');
  };
  return (
    <div className="mt-20">
      <h1 className="text-3xl mb-4 text-center">LOGIN</h1>
      <div className="w-2/6 m-auto">
        <FormLogin onHandlerSubmit={onSubmit} />
        <p className="mt-4">
          Tidak punya akun?,{' '}
          <NavLink type="button" to="/register" className="rounded-2xl text-blue-500 font-bold">
            SignUp
          </NavLink>
        </p>
      </div>
    </div>
  );
}
export default Index;
