import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/likes';

export const likeServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAll = async (commentId) => {
    const query = encodeURIComponent(`_commentId="${commentId}"`);
    const result = await request.get(`${baseUrl}?where=${query}`);
    const likes = Object.values(result);

    return likes;
  };

  const addLike = async (data) => {
    const result = await request.post(baseUrl, data);

    return result;
  };

  const deleteLike = async (likeId) => await request.delete(`${baseUrl}/${likeId}`);

  return {
    getAll,
    addLike,
    delete: deleteLike,
  };
};
