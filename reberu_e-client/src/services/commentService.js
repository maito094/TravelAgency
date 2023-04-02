import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/comments';

export const commentServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAll = async (blogId) => {
    const query = encodeURIComponent(`_blogId="${blogId}"`);
    const result = await request.get(`${baseUrl}?where=${query}`);
    const comments = Object.values(result);

    return comments;
  };

  const addComment = async (data) => {
    const result = await request.post(baseUrl, data);

    return result;
  };

  const edit = async (data, commentId) => {};
  const deleteComment = async (commentId) => {};

  return {
    getAll,
    edit,
    addComment,
    delete: deleteComment,
  };
};
