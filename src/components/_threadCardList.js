import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadItemShape } from './_threadItem';

function ThreadCardList({ threads, upVote, downVote, neturalizeVoteThread, auth }) {
  return (
    <>
      {threads.map((thread) => (
        <ThreadItem
          key={thread.id}
          {...thread}
          upVote={upVote}
          downVote={downVote}
          neturalizeVote={neturalizeVoteThread}
          auth={auth}
        />
      ))}
    </>
  );
}

ThreadCardList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVoteThread: PropTypes.func.isRequired,
  auth: PropTypes.string.isRequired,
};
export default ThreadCardList;
