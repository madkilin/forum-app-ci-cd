import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function FormComment({ onHandlerSubmit }) {
  const [comment, setComment] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [comment]);
  return (
    <div className=" w-full">
      <p className="font-bold mt-4 mb-1">Beri komentar</p>
      <form
        className=" rounded-md shadow-md w-full"
        onSubmit={(e) => onHandlerSubmit({ content: comment, event: e })}
      >
        <div className="flex flex-col gap-2">
          <textarea
            className="p-2 overflow-hidden h-10 bg-[#dfdcdc] text-black rounded-md"
            cols="30"
            rows="6"
            onChange={(e) => setComment(e.target.value)}
            ref={textareaRef}
            placeholder="Comment..."
            value={comment}
          />
        </div>

        <input
          type="submit"
          className="w-full bg-amber-400 mt-4 p-1 rounded-sm hover:bg-amber-300"
          value="kirim"
        />
      </form>
    </div>
  );
}
FormComment.propTypes = {
  onHandlerSubmit: PropTypes.func.isRequired,
};
export default FormComment;
