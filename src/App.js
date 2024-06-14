import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import { asyncUnsetAuthUser } from './state/actions/authUser';
import { asyncPreloadProcess } from './state/actions/isPreload';
import Login from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Navigation from './components/_navigation';
import LeaderboardsPage from './pages/LeaderboradsPage';
import Register from './pages/RegisterPage';
import DetailThreadPage from './pages/DetailThreadPage';
import AddThereadPage from './pages/AddThereadPage';
import Loading from './components/_loading';

function App() {
  const isAuthenticated = useSelector((state) => state.auth);
  const isLoading = useSelector((state) => state.isPreload);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isLoading) {
    return null;
  }

  return (
    <>
      <Loading />
      {isAuthenticated ? (
        <>
          <Navigation auth={isAuthenticated} handlerLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/leaderboard" element={<LeaderboardsPage />} />
            <Route path="/thread/:id" element={<DetailThreadPage />} />
            <Route path="/post" element={<AddThereadPage />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
    </>
  );
}
export default App;
