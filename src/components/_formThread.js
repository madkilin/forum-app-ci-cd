import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function FormThread({ onHandlerSubmit }) {
  const [value, setValue] = useState({
    title: '',
    body: '',
    category: '',
  });
  const textareaRef = useRef(null);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);
  return (
    <div className="px-3 py-5 rounded-sm">
      <form onSubmit={(e) => onHandlerSubmit({ ...value, event: e })}>
        <div className="flex flex-col gap-2 mb-2">
          <label className="text-white" htmlFor="title">
            Judul
          </label>
          <input
            className="rounded-sm p-2 bg-[#3b3d44] text-white"
            type="text"
            onChange={(e) => setValue({ ...value, title: e.target.value })}
            id="title"
            name="title"
            autoComplete="title"
            value={value.title}
          />
        </div>
        <div className="flex flex-col gap-2 mb-2">
          <label className="text-white" htmlFor="email">
            Kategori
          </label>
          <input
            className="rounded-sm p-2 bg-[#3b3d44] text-white"
            type="text"
            onChange={(e) => setValue({ ...value, category: e.target.value })}
            id="category"
            name="category"
            autoComplete="category"
            value={value.category}
          />
        </div>
        <div className="flex flex-col gap-2 mb-2">
          <label className="text-white" htmlFor="body">
            Threads
          </label>
          <textarea
            className="p-2 overflow-hidden h-10 bg-[#3b3d44] text-white"
            cols="30"
            rows="6"
            onChange={(e) => setValue({ ...value, body: e.target.value })}
            ref={textareaRef}
            id="body"
            name="body"
            value={value.body}
          />
        </div>
        <input
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 mt-4 p-1 rounded-sm"
        />
      </form>
    </div>
  );
}
FormThread.propTypes = {
  onHandlerSubmit: PropTypes.func.isRequired,
};
export default FormThread;
