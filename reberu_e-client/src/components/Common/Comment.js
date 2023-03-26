
export const Comment=({
    _ownerName,
    _ownerdId,
    content,
    _blogId,
    likes,
    _createdOn,
})=>{

    return(
        <div className="d-flex py-2">
        <div style={{ minWidth: '280px'}} className="second py-2 px-2">
          <span style={{flexShrink:'1'}} className="text1">{content}</span>
          <div style={{flexShrink:'1'}} className="d-flex justify-content-between py-1 pt-2">
            <div style={{flexShrink:'1'}}>
              <img src="https://i.imgur.com/tPvlEdq.jpg" width="18" />
              <span className="text2">{_ownerName}</span>
            </div>
            <div style={{flexShrink:'1'}}>
              <span className="text3"></span>
              <span className="thumbup">
                <i className="fa fa-thumbs-o-up"></i>
              </span>
              <span className="text4">{likes}</span>
            </div>
          </div>
        </div>
      </div>

    )
}