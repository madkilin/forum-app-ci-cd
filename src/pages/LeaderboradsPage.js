import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LeaderBoardRow from '../components/_lederBoardRow';
import { asyncPopulateLeaderboards } from '../state/actions/leaderBoards';

function LeaderboardsPage() {
  const dispatch = useDispatch();
  const leaderboards = useSelector((states) => states.leaderboards);

  useEffect(() => {
    dispatch(asyncPopulateLeaderboards());
  }, [dispatch]);
  return (
    <div className="w-2/4 m-auto bg-[#3f4042] py-6 px-6 my-6 rounded-md">
      <h1 className="text-2xl font-semibold">Leaderborad</h1>
      <div className="flex justify-between items-center mt-4 font-semibold mb-2">
        <p className="my-3">10 pengguna teratas</p>
        <p>scrore</p>
      </div>
      {leaderboards.map(({ user, score }) => (
        <LeaderBoardRow key={user.id} user={user} score={score} />
      ))}
    </div>
  );
}
export default LeaderboardsPage;
