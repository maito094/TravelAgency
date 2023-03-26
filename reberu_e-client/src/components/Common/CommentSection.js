import { Comment } from './Comment';

export const CommentSection = ({ comments }) => {
  return (
    <div className="container justify-content-center mt-5 border-left border-right">
      <div className="d-flex justify-content-center pt-3 pb-2">
        <input type="text" name="text" placeholder="+ Add a note" className="form-control addtxt" />{' '}
      </div>
      <div style={{margin: '5px auto', width:'300px'}} className="text1">Type your note, and hit enter to add it</div>
      <div  style={{justifyContent:'space-evenly'}} className="d-flex flex-wrap py-2">
        {comments.map((x) => (
          <Comment key={x._id} {...x} />
        ))}
      </div>
    </div>
  );
};
