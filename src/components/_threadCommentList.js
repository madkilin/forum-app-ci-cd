import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ThreadCommentItem, { commentShape } from './_threadCommentItem';

export default function ThreadCommentList({
  comments,
  auth,
  upVoteComment,
  downVoteComment,
  neturalizeVoteComment,
}) {
  return (
    <>
      <p className="font-bold mt-4 ">Total Comment ({comments.length})</p>
      {comments.map((comment) => (
        <ThreadCommentItem
          {...comment}
          auth={auth}
          key={comment.id}
          upVote={upVoteComment}
          downVote={downVoteComment}
          neturalizeVote={neturalizeVoteComment}
        />
      ))}
    </>
  );
}

ThreadCommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
  auth: PropTypes.string.isRequired,
  upVoteComment: PropTypes.func.isRequired,
  downVoteComment: PropTypes.func.isRequired,
  neturalizeVoteComment: PropTypes.func.isRequired,
};
