/* eslint-disable import/no-anonymous-default-export */
export default {
  Routes: {
    homepage: '/',
    posts: '/posts',
    users: '/users',
  },

  Apis: {
    baseUrl: process.env.REACT_APP_API_BASE_URL!,
    appId: '605ef9435f80a01971703d1f',
    services: {
      user: '/user',
      post: '/post',
      tag: '/tag',
    },
  },
};
