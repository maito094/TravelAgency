import { Comment } from './Comment';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

export const CommentSection = ({ comments, blogId }) => {
  const { userId, token, isAuthenticated, userEmail } = useContext(AuthContext);

  return (
    <div className="container justify-content-center mt-5 border-left border-right">
      {isAuthenticated && (
        <div>
          <div className="d-flex justify-content-center pt-3 pb-2">
            <input type="text" name="text" placeholder="+ Add a note" className="form-control addtxt" />{' '}
          </div>
          <div style={{ margin: '5px auto', width: '300px' }} className="text1">
            Type your note, and hit enter to add it
          </div>
        </div>
      )}
      <div style={{ justifyContent: 'space-evenly' }} className="d-flex flex-wrap py-2">
        {comments.map((x) => (
          <Comment key={x._id} {...x} />
        ))}
      </div>
    </div>
  );
};
