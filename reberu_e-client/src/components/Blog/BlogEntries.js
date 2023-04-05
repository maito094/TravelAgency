import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { blogServiceFactory } from '../../services/blogService';
import { commentServiceFactory } from '../../services/commentService';
import { BlogCard } from './BlogCard';
import { useService } from '../../hooks/useService';
import { CommentSection } from '../Common/CommentSection';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';


export const BlogEntries = ({ blog, onDeleteHandler }) => {
  const { blogId } = useParams();
  const [blogEntry, setBlog] = useState({});
  const [comments, setComments] = useState([]);

  const blogService = useService(blogServiceFactory);
  const commentService = useService(commentServiceFactory);
  const { userId, token, userEmail } = useContext(AuthContext);

  const onBlogDetailsLoadComment = (blogId) => {
    commentService.getAll(blogId).then((result) => {
      setComments(result);
    });
  };

  const onSubmitCommentHandler = async (data) => {
    const result = await commentService.addComment(data);
    setComments((c) => [...c, result]);
  };


  const onDeleteComment = async (commentId) => {
    await commentService.delete(commentId);

    setComments((c) => c.filter((x) => x._id !== commentId));
  };

  const onDelete = (e) => {
    e.preventDefault();
    onDeleteHandler(blogId);
  };

  useEffect(() => {
    if (blogId) {

      // Try PROMISE.ALL()
      blogService.getOne(blogId).then((result) => {
        setBlog(result);
      });
      onBlogDetailsLoadComment(blogId);
    } else {
      setBlog(blog);
    }
  }, [blogId, blog]);

  return (
    <div>
      <div
        className="mt-5 tm-section tm-section-pad tm-bg-img"
        id="tm-section-5"
        style={{
          backgroundImage: `linear-gradient(rgba(74, 74, 66, 0.703),  rgba(167, 165, 146, 0.708)), url(${blogEntry?.img ?? ''})`,
        }}
      >
        <div className="row tm-flex-align-center tm-media-body-v-center">
          <div className="col-xs-12 col-md-12 col-lg-9 col-xl-9 tm-media-title-container">
            <h2 className="text-uppercase tm-section-title-2">{blogEntry?.continent ?? ''}</h2>
            <h3 className="tm-color-primary tm-font-semibold tm-section-subtitle-2">{blogEntry?.title ?? ''}</h3>
          </div>
          <div className=" mt-0 mt-sm-3 ">
            <div className="ml-auto tm-bg-white-shadow tm-pad tm-media-container ">
              <article className="media tm-margin-b-20 tm-media-1">
                <img className="media tm-margin-b-20 tm-media-1" src={blogEntry?.img ?? ''} alt="" style={{ height: '250px' }} />
                <div className="media-body tm-media-body-1 tm-media-body-v-center">
                  <h3 className="tm-font-semibold tm-color-primary tm-article-title-3">
                    Suspendisse vel est libero sem phasellus ac laoreet
                  </h3>
                  <p style={{ color: 'whitesmoke' }}>{blogEntry?.description ?? ''}</p>
                </div>
              </article>

              <article className="media tm-margin-b-20 tm-media-1 flex-row justify-content-between tm-media-body-v-center flex-wrap">
                <h3 className="font-weight-bold tm-color-primary" style={{ maxWidth: '200px', minWidth: '200px' }}>
                  Things to do around:
                </h3>
                {blogEntry?.Do?.map((x) => {
                  return <BlogCard key={x.name} {...x} />;
                }) ?? ''}
              </article>
              <article className="media tm-margin-b-20 tm-media-1 flex-row justify-content-between tm-media-body-v-center flex-wrap">
                <h3 className="font-weight-bold tm-color-primary " style={{ maxWidth: '200px', minWidth: '200px' }}>
                  Where to stay:
                </h3>
                {blogEntry?.Stay?.map((x) => {
                  return <BlogCard key={x.name} {...x} />;
                }) ?? ''}
              </article>
              <article className="media tm-margin-b-20 tm-media-1 flex-row justify-content-between tm-media-body-v-center flex-wrap">
                <h3 className="font-weight-bold tm-color-primary" style={{ maxWidth: '200px', minWidth: '200px' }}>
                  What to eat:
                </h3>
                {blogEntry?.Eat?.map((x) => {
                  return <BlogCard key={x.name} {...x} />;
                }) ?? ''}
              </article>
            </div>
          </div>
        </div>
      </div>
      {blogId && blogEntry?._ownerId === userId && (
        <div style={{ textAlign: 'center', margin: '20px 0px' }}>
          <button className="link btn-info">
            <Link to={`/edit-topic/${blogId}`} style={{ display: 'block', lineHeight: '77px', width: '100%', color: 'white' }} id="editBtn">
              Edit
            </Link>
          </button>
          <button style={{ textDecoration: 'none' }} className="link btn-danger" onClick={onDelete} id="deleteBtn">
            Delete
          </button>
        </div>
      )}
      {blogId && (
        <CommentSection
          comments={comments}
          blogId={blogId}
          onSubmitCommentHandler={onSubmitCommentHandler}
          onDeleteComment={onDeleteComment}
        />
      )}
    </div>
  );
};
