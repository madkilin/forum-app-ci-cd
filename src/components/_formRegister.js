import React, { useState } from 'react';
import PropTypes from 'prop-types';

function FormRegister({ onHandlerSubmit }) {
  const [value, setValue] = useState({
    name: '',
    email: '',
    password: '',
  });

  return (
    <div className="bg-gray-500 px-3 py-5 rounded-sm">
      <form onSubmit={(e) => onHandlerSubmit({ ...value, event: e })}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nama">Name</label>
          <input
            className="rounded-sm p-2"
            type="text"
            onChange={(e) => setValue({ ...value, name: e.target.value })}
            id="nama"
            name="nama"
            autoComplete="nama"
            value={value.name}
            placeholder="nama"
          />
        </div>
        <div className="flex flex-col gap-2 mt-2">
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
            id="password"
            name="password"
            placeholder="password"
          />
        </div>
        <input
          type="submit"
          className="w-full bg-yellow-400 mt-4 p-1 rounded-sm"
          value="Register"
        />
      </form>
    </div>
  );
}
FormRegister.propTypes = {
  onHandlerSubmit: PropTypes.func.isRequired,
};
export default FormRegister;
