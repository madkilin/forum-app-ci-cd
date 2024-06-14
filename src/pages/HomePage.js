import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PencilLine } from 'lucide-react';
import ThreadCardList from '../components/_threadCardList';
import asyncPopulateUsersAndThreads from '../state/actions/shared';
import {
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeturalizeVoteThread,
} from '../state/actions/threads';

function HomePage() {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const threads = useSelector((states) => states.threads);
  const users = useSelector((states) => states.users);
  const auth = useSelector((states) => states.auth);
  const navigate = useNavigate();
  const categories = new Set(threads.map((thread) => thread.category));
  const threadList = threads.map((thread) => ({
    ...thread,
    threadOwner: users.find((user) => user.id === thread.ownerId),
    auth: auth?.id,
  }));
  const upVoteThread = (id) => {
    dispatch(asyncUpVoteThread(id));
  };
  const downVoteThread = (id) => {
    dispatch(asyncDownVoteThread(id));
  };
  const neturalizeVoteThread = (id) => {
    dispatch(asyncNeturalizeVoteThread(id));
  };
  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  return (
    <div className="md:w-2/4 md:mx-auto md:my-10 my-10 px-10">
      <div className="flex gap-5 items-center mb-10">
        <img className="h-12 w-12 rounded-full" src={auth.avatar} alt="avatar" />
        <button
          type="button"
          className="w-full bg-[#36383b] text-white border-[1px] border-gray-400 h-12 rounded-full hover:bg-[#424344] flex items-center justify-center gap-2"
          onClick={() => navigate('/post')}
        >
          <PencilLine />
          Buat Thread
        </button>
      </div>
      <div className="flex gap-4 items-center text-white">
        {Array.from(categories).map((category) => {
          if (filter === category) {
            return (
              <button
                className=" border-gray-300 border-2 px-4 py-1 rounded-md bg-gray-700"
                type="button"
                key={category}
                onClick={() => setFilter('')}
              >
                {`#${category}`}
              </button>
            );
          }
          return (
            <button
              className="px-4 py-2 text-blue-500 font-semibold "
              type="button"
              key={category}
              onClick={() => setFilter(category)}
            >
              {`#${category}`}
            </button>
          );
        })}
      </div>
      <ThreadCardList
        threads={filter ? threadList.filter((thread) => thread.category === filter) : threadList}
        upVote={upVoteThread}
        downVote={downVoteThread}
        neturalizeVoteThread={neturalizeVoteThread}
        auth={auth.id}
      />
    </div>
  );
}
export default HomePage;
