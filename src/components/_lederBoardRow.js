import React from 'react';
import PropTypes from 'prop-types';
import { userShape } from './_threadItem';

function LeaderBoardRow({ user, score }) {
  return (
    <div className="flex items-center justify-between mb-4 border-b-[1px] border-[#9e9e9e] pb-3">
      <div className="flex items-center gap-4">
        <img className="rounded-full h-12" src={user.avatar} alt="avatar" />
        <p>{user.name}</p>
      </div>
      <p>{score}</p>
    </div>
  );
}

LeaderBoardRow.propTypes = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};
export default LeaderBoardRow;
