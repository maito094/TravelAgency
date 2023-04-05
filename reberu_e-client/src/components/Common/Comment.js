import { useEffect, useState } from 'react';
import { useService } from '../../hooks/useService';
import { likeServiceFactory } from '../../services/likeService';

export const Comment = ({ _id, _ownerName, _ownerId, content, _blogId, _createdOn, onDelete, userId, onLikeUnlike }) => {
  const [likes, setLikes] = useState([{}]);

  const likeService = useService(likeServiceFactory);

  const onLikeUnlikeHandler = async () => {
    if (!userId) {
      return;
    }
    // Find if User has already Liked current Comment
    const targetLike = likes.find((l) => l._ownerId === userId);

    if (likes && targetLike) {
      await likeService.delete(targetLike._id);

      setLikes((x) => x.filter((l) => l._id !== targetLike._id));
    } else {
      const resultLike = await likeService.addLike({ _ownerId, _commentId:_id });

      setLikes((x) => [...x, resultLike]);
    }
  };
  
  useEffect(() => { 

    likeService.getAll(_id).then((result) => {
      setLikes(result);
    });
  }, [_id]);


  return (
    <div className="d-flex py-2">
      <div style={{ minWidth: '280px' }} className="second py-2 px-2">
        <span style={{ flexShrink: '1' }} className="text1">
          {content}
        </span>
        <div style={{ flexShrink: '1' }} className="d-flex justify-content-between py-1 pt-2">
          <div style={{ flexShrink: '1' }}>
            <img src="https://i.imgur.com/tPvlEdq.jpg" width="18" />
            <span className="text2">{_ownerName}</span>
          </div>
          <div style={{ flexShrink: '1' }}>
            <span className="text3"></span>
            <span className="thumbup">
              <i
                onClick={() => onLikeUnlikeHandler()}
                className={likes?.find((l) => l._ownerId === userId) && likes?.length > 0 ? 'fa  fa-thumbs-o-up' : 'fa  fa-thumbs-up'}
              ></i>
            </span>
            <span className="text4">{likes.length ? likes.length : '0'}</span>
            {userId === _ownerId && (
              <button onClick={() => onDelete(_id)} className="btn-danger">
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
