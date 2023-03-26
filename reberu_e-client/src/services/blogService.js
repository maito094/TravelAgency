import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/topic';
const baseUrlComments = 'http://localhost:3030/data/comments';


export const blogServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const topics = Object.values(result);
    
        return topics;
    };

    const getAllBlogComments = async (blogId) => {

        const query = encodeURIComponent(`_blogId="${blogId}"`)
        const result = await request.get(`${baseUrlComments}?where=${query}`);
        const comments = Object.values(result);
    
        return comments;
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
    
    const addComment = async (blogId, data) => {
        const result = await request.post(`${baseUrl}/${blogId}/comments`, data);
    
        return result;
    };

    const edit = (blogId, data) => request.put(`${baseUrl}/${blogId}`, data);

    const deleteBlog = (blogId) => request.delete(`${baseUrl}/${blogId}`);


    return {
        getAll,
        getAllBlogComments,
        getOne,
        create,
        edit,
        addComment,
        delete: deleteBlog,
    };
}