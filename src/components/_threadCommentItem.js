import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import postedAt from '../utils/date';
import VoteButton from './_voteButton';
import { userShape } from './_threadItem';

function ThreadCommentItem({
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  auth,
  upVote,
  downVote,
  neturalizeVote,
}) {
  return (
    <div key={id} className="bg-[#3f4042] mt-1 p-4 rounded-md shadow-md w-full">
      <div className="flex items-center justify-between mb-3">
        <p className="font-semibold">{owner?.name}</p>
        <p>{postedAt(createdAt)}</p>
      </div>
      <p>{parse(content)}</p>
      <div className="flex gap-3 mt-2">
        <VoteButton
          id={id}
          auth={auth}
          upVote={upVote}
          downVote={downVote}
          neturalizeVote={neturalizeVote}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
      </div>
    </div>
  );
}

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ThreadCommentItem.propTypes = {
  ...commentShape,
  auth: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
};
export { commentShape };

export default ThreadCommentItem;
