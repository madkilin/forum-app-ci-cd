import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormThread from '../components/_formThread';
import { asyncCreateThread } from '../state/actions/threads';

function AddThereadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onHandlerSubmit = ({ title, body, category }) => {
    dispatch(asyncCreateThread({ title, body, category }));
    navigate('/');
  };
  return (
    <div className="md:w-2/3 m-auto mt-5 ">
      <h1 className="text-center text-2xl font-semibold">Buad Thread</h1>
      <FormThread onHandlerSubmit={onHandlerSubmit} />
    </div>
  );
}
export default AddThereadPage;
