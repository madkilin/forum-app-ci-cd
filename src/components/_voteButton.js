import React from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import PropTypes from 'prop-types';

function VoteButton({ id, upVote, downVote, neturalizeVote, upVotesBy, downVotesBy, auth }) {
  const onUpVoteClick = () => {
    upVote(id);
  };
  const onDownVoteClick = () => {
    downVote(id);
  };
  const onNeturalizeVote = () => {
    neturalizeVote(id);
  };
  const isUpvote = upVotesBy.includes(auth);
  const isDownVote = downVotesBy.includes(auth);

  return (
    <div className="flex items-center gap-3" key={id}>
      <span type="button" className="flex items-center gap-2 ">
        {isUpvote ? (
          <ThumbsUp className="w-5 h-5 cursor-pointer text-blue-500" onClick={onNeturalizeVote} />
        ) : (
          <ThumbsUp className="w-5 h-5 cursor-pointer text-white" onClick={onUpVoteClick} />
        )}
        <p>{upVotesBy.length}</p>
      </span>
      <span type="button" className="flex items-center gap-2 ">
        {isDownVote ? (
          <ThumbsDown
            className="w-5 h-5 cursor-pointer  text-blue-500"
            onClick={onNeturalizeVote}
          />
        ) : (
          <ThumbsDown className="w-5 h-5  cursor-pointer  text-white" onClick={onDownVoteClick} />
        )}

        <p>{downVotesBy.length}</p>
      </span>
    </div>
  );
}
VoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  auth: PropTypes.string.isRequired,
};
export default VoteButton;
