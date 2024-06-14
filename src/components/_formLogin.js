import React, { useState } from 'react';
import PropTypes from 'prop-types';

function FormLogin({ onHandlerSubmit }) {
  const [value, setValue] = useState({
    email: '',
    password: '',
  });
  return (
    <div className="bg-gray-500 px-3 py-5 rounded-sm">
      <form onSubmit={(e) => onHandlerSubmit({ ...value, event: e })}>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="rounded-sm p-2"
            type="email"
            onChange={(e) => setValue({ ...value, email: e.target.value })}
            id="email"
            name="email"
            autoComplete="email"
            value={value.email}
            placeholder="email"
          />
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <label htmlFor="password">Password</label>
          <input
            className="rounded-sm p-2"
            type="password"
            onChange={(e) => setValue({ ...value, password: e.target.value })}
            autoComplete="current-password"
            value={value.password}
            name="password"
            id="password"
            placeholder="password"
          />
        </div>

      </form>
    </div>
  );
}
FormLogin.propTypes = {
  onHandlerSubmit: PropTypes.func.isRequired,
};
export default FormLogin;
