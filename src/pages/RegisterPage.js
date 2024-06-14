import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import FormRegister from '../components/_formRegister';
import { asyncRegisterUser } from '../state/actions/user';

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = ({ event, name, email, password }) => {
    event.preventDefault();
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/login');
  };
  return (
    <div className="mt-20">
      <h1 className="text-3xl mb-4 text-center">REGISTER </h1>
      <div className="w-2/6 m-auto">
        <FormRegister onHandlerSubmit={onSubmit} />
        <p className="mt-4">
          Sudah punya akun?,{' '}
          <NavLink type="button" to="/*" className="rounded-2xl text-blue-500 font-bold">
            SigIn
          </NavLink>
        </p>
      </div>
    </div>
  );
}
export default RegisterPage;
