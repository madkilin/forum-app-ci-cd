import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { MessageSquareText } from 'lucide-react';
import postedAt from '../utils/date';
import VoteButton from './_voteButton';
import { userShape } from './_threadItem';

function ThreadDetail({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  totalComments,
  owner,
  downVotesBy,
  upVote,
  downVote,
  neturalizeVoteThread,
  auth,
}) {
  return (
    <div key={id} className="bg-[#3f4042] mt-4 p-4 rounded-md shadow-md w-full">
      <p className="text-blue-500 font-semibold">{`#${category}`}</p>
      <h2 className="text-2xl font-bold my-2">{title}</h2>
      <div className="text-white">{parse(body)}</div>
      <div className="flex gap-5 items-center mt-4 font-light">
        <VoteButton
          id={id}
          auth={auth}
          upVote={upVote}
          downVote={downVote}
          neturalizeVote={neturalizeVoteThread}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
        <span className="flex items-center gap-2 text-white">
          <MessageSquareText className="w-5 h-5" />
          {totalComments}
        </span>
        <p>{postedAt(createdAt)}</p>
        <div className="flex items-center text-white gap-3">
          <p>Dibuat Oleh :</p>
          <div className="flex items-center text-white gap-1">
            <img className="w-5 rounded-full" src={owner?.avatar} alt="" />
            <span className="font-semibold">{owner?.name}</span>{' '}
          </div>
        </div>
      </div>
    </div>
  );
}

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVoteThread: PropTypes.func.isRequired,
  auth: PropTypes.string.isRequired,
};

export default ThreadDetail;
