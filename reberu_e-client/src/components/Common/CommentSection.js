import { Comment } from './Comment';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext, useState } from 'react';

export const CommentSection = ({ comments, blogId, onSubmitCommentHandler, onDeleteComment }) => {
  const { userId, token, isAuthenticated, userEmail } = useContext(AuthContext);
  const [postComment, setPostComment] = useState('');

  const onPostCommentChangeHandler = (e) => {
    setPostComment((state) => e.target.value);
  };

  const onEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      const commentObj = { _ownerId: userId, _ownerName: userEmail, content: postComment, _blogId: blogId, likes: 0 };

      onSubmitCommentHandler(commentObj);

      setPostComment('');
    }
  };

  return (
    <div className="container justify-content-center mt-5 border-left border-right">
      {isAuthenticated && (
        <div>
          <div className="d-flex justify-content-center pt-3 pb-2">
            <input
              onKeyDown={onEnterKeyPress}
              value={postComment}
              onChange={onPostCommentChangeHandler}
              type="text"
              name="text"
              placeholder="+ Add a note"
              className="form-control addtxt"
            />{' '}
          </div>
          <div style={{ margin: '5px auto', width: '300px' }} className="text1">
            Type your note, and hit enter to add it
          </div>
        </div>
      )}
      <div style={{ justifyContent: 'space-evenly' }} className="d-flex flex-wrap py-2">
        {comments.map((x) => (
          <Comment key={x._id} {...x} onDelete={onDeleteComment} isOwner={userId === x._ownerId} />
        ))}
      </div>
    </div>
  );
};
