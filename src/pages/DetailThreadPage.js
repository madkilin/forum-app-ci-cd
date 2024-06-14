import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  asyncCreateComment,
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralizeVoteComment,
} from '../state/actions/threadDetail';
import ThreadDetail from '../components/_threadDetail';
import ThreadCommentList from '../components/_threadCommentList';
import FormComment from '../components/_formComment';

function DetailThreadPage() {
  const { id: idThread } = useParams();
  const threadDetail = useSelector((states) => states.threadDetail);
  const auth = useSelector((states) => states.auth);
  const dispatch = useDispatch();
  const upVoteThread = () => {
    dispatch(asyncUpVoteThreadDetail());
  };
  const downVoteThread = () => {
    dispatch(asyncDownVoteThreadDetail());
  };
  const neturalizeVoteThread = () => {
    dispatch(asyncNeutralizeVoteThreadDetail());
  };
  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(idThread));
  }, [idThread, dispatch]);
  const onUpVoteComment = (id) => {
    dispatch(asyncUpVoteComment(id));
  };
  const downVoteComment = (id) => {
    dispatch(asyncDownVoteComment(id));
  };
  const neturalizeVoteComment = (id) => {
    dispatch(asyncNeutralizeVoteComment(id));
  };
  const onCommentSubmit = ({ event, content }) => {
    event.preventDefault();
    dispatch(asyncCreateComment({ content }));
  };
  if (threadDetail === null) {
    return <p>ANTOSAN...</p>;
  }
  return (
    <div className="w-2/4 m-auto my-10">
      <ThreadDetail
        {...threadDetail}
        totalComments={threadDetail?.comments?.length}
        upVote={upVoteThread}
        downVote={downVoteThread}
        neturalizeVoteThread={neturalizeVoteThread}
        auth={auth.id}
      />
      <FormComment onHandlerSubmit={onCommentSubmit} />
      <ThreadCommentList
        comments={threadDetail.comments}
        auth={auth.id}
        upVoteComment={onUpVoteComment}
        downVoteComment={downVoteComment}
        neturalizeVoteComment={neturalizeVoteComment}
      />
    </div>
  );
}
export default DetailThreadPage;
