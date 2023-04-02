import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/topic';

export const blogServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAll = async () => {
    const result = await request.get(baseUrl);
    const topics = Object.values(result);

    return topics;
  };

  const getOne = async (blogId) => {
    const result = await request.get(`${baseUrl}/${blogId}`);

    return result;
  };

  const create = async (blogData) => {
    const result = await request.post(baseUrl, blogData);

    console.log(result);

    return result;
  };

  const edit = (blogId, data) => request.put(`${baseUrl}/${blogId}`, data);

  const deleteBlog = (blogId) => request.delete(`${baseUrl}/${blogId}`);

  return {
    getAll,
    getOne,
    create,
    edit,
    delete: deleteBlog,
  };
};
