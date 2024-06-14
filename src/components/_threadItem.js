import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { MessageSquareText, ThumbsUp, ThumbsDown } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import postedAt from '../utils/date';
import VoteButton from './_voteButton';

function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  totalComments,
  threadOwner,
  downVotesBy,
  upVote,
  downVote,
  neturalizeVote,
  auth,
}) {
  return (
    <div key={id} className="bg-[#3f4042] mt-4 p-4 rounded-md shadow-md">
      <NavLink to={`/thread/${id}`}>
        <p className="text-blue-500 font-semibold">{`#${category}`}</p>
        <h2 className="text-2xl font-semibold my-2">{title}</h2>
        <div className="text-white">{parse(body)}</div>
      </NavLink>
      <div className="flex gap-5 items-center mt-4 font-light">
        <VoteButton
          id={id}
          auth={auth}
          upVote={upVote}
          downVote={downVote}
          neturalizeVote={neturalizeVote}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
        <span className="flex items-center gap-2 text-white">
          <MessageSquareText className="w-5 h-5" />
          {totalComments}
        </span>
        <p>{postedAt(createdAt)}</p>
        <p>
          Dibuat Oleh : <span className="font-semibold">{threadOwner.name}</span>{' '}
        </p>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  avatar: PropTypes.string.isRequired,
};
const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  threadOwner: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  auth: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
};
export { threadItemShape, userShape };
export default ThreadItem;
