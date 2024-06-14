const api = (() => {
  const BASE_URL = 'https://forum-api.dicoding.dev/v1';

  const getAccessToken = () => localStorage.getItem('accessToken');
  const deleteAccessToken = () => localStorage.removeItem('accessToken');
  const putAccessToken = (token) => localStorage.setItem('accessToken', token);

  const fetchWithAuth = async (url, options = {}) => fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });

  const handleResponse = async (response) => {
    const responseJson = await response.json();
    const { status, message } = responseJson;
    if (status !== 'success') {
      throw new Error(message);
    }
    return responseJson;
  };

  const register = async ({ name, email, password }) => {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    const responseJson = await handleResponse(response);
    return responseJson.data.user;
  };

  const login = async ({ email, password }) => {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const responseJson = await handleResponse(response);
    return responseJson.data.token;
  };

  const getOwnProfile = async () => {
    const response = await fetchWithAuth(`${BASE_URL}/users/me`);
    const responseJson = await handleResponse(response);
    return responseJson.data.user;
  };

  const getAllUsers = async () => {
    const response = await fetch(`${BASE_URL}/users`);
    const responseJson = await handleResponse(response);
    return responseJson.data.users;
  };

  const createThread = async ({ title, body, category }) => {
    const response = await fetchWithAuth(`${BASE_URL}/threads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, body, category }),
    });

    const responseJson = await handleResponse(response);
    return responseJson.data.thread;
  };

  const getAllThreads = async () => {
    const response = await fetch(`${BASE_URL}/threads`);
    const responseJson = await handleResponse(response);
    return responseJson.data.threads;
  };

  const getThreadDetail = async (id) => {
    const response = await fetch(`${BASE_URL}/threads/${id}`);
    const responseJson = await handleResponse(response);
    return responseJson.data.detailThread;
  };

  const createComment = async ({ content, threadId }) => {
    const response = await fetchWithAuth(`${BASE_URL}/threads/${threadId}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    });

    const responseJson = await handleResponse(response);
    return responseJson.data.comment;
  };

  const voteThread = async (id, voteType) => {
    const response = await fetchWithAuth(`${BASE_URL}/threads/${id}/${voteType}-vote`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    await handleResponse(response);
  };

  const upVoteThread = async (id) => voteThread(id, 'up');
  const downVoteThread = async (id) => voteThread(id, 'down');
  const neutralizeThreadVote = async (id) => voteThread(id, 'neutral');

  const voteComment = async (threadId, commentId, voteType) => {
    const response = await fetchWithAuth(
      `${BASE_URL}/threads/${threadId}/comments/${commentId}/${voteType}-vote`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const responseJson = await handleResponse(response);
    return responseJson.data.vote;
  };

  const upVoteComment = async (threadId, commentId) => voteComment(threadId, commentId, 'up');
  const downVoteComment = async (threadId, commentId) => voteComment(threadId, commentId, 'down');
  const neutralVoteComment = async (threadId, commentId) => voteComment(threadId, commentId, 'neutral');

  const getLeaderBoards = async () => {
    const response = await fetch(`${BASE_URL}/leaderboards`);
    const responseJson = await handleResponse(response);
    return responseJson.data.leaderboards;
  };

  return {
    login,
    register,
    getAllThreads,
    getThreadDetail,
    createThread,
    createComment,
    upVoteThread,
    downVoteThread,
    neutralizeThreadVote,
    upVoteComment,
    downVoteComment,
    neutralVoteComment,
    getLeaderBoards,
    getAccessToken,
    putAccessToken,
    deleteAccessToken,
    getAllUsers,
    getOwnProfile,
  };
})();

export default api;
