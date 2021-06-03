import React, { useRef } from "react";
import Comment from "../Comment/Comment";
import profileFunctions from "../../utils/profile";
import {useHistory} from 'react-router-dom'
import PostLikeAndComment from "../PostLikeAndComment/PostLikeAndComment";
import "./PostModal.css";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CloseIcon from "@material-ui/icons/Close";

const PostModal = (props) => {
  const {
    close,
    name,
    caption,
    media,
    profile_image,
    postId,
    likes,
    doesLike,
    hookLike,
    hookTotalLikes,
    error,
    toggleLike,
    open,
    allComments,
    createComment,
    userId,
    postedBy,
    change
   
  } = props;

  const a = localStorage.getItem('user')
 const use= JSON.parse(a)._id
console.log(profile_image)
  const myRef = useRef(null);
  const history =useHistory()
  return (
    <div className="Modal">
        {open?<CloseIcon className="sv" onClick={close}  />:null}
      <div className="Modal_div">
        <div className="Modal_img_container">
          <img
            src={media}
            className="Modal_img"
          />
        </div>
        {userId===use ?<div className="overlay2" ><MoreHorizIcon fontSize="default" color="primary"  onClick={()=>history.push({pathname:"/editpost",state:postId,userId:userId})} /> </div>:null}
        <div className="Modal_comment_wrapper">
          <div className="Modal_comment_container" ref={myRef}>
            {console.log(allComments)}
            <Comment
              name={name}
              comment={caption}
              profile_image={profile_image}
              userId={userId}
              postId={postId}
              allComments={allComments}
              change={props.change}
              caption={caption}
            />
            {allComments.map((comment, index) => {
               {console.log(comment)}
              if (comment) {
                return (
                  <Comment
                    val={comment._id}
                    name={comment.postedBy.name}
                    profile_image={comment.postedBy.profile_image}
                    comment={comment.comment}
                    userId={comment.postedBy._id}
                    postId={postId}
                    caption={caption}
                    allComments={allComments}
                    change={props.change}
                  />
                );
              }
            })}
          </div>
          {/* <button onClick={()=>history.push({pathname:"/editpost",state:postId,userId:userId})}>"edit"</button> */}

          <PostLikeAndComment
            name={name}
            caption={caption}
            postId={postId}
            userId={userId}
            likes={likes}
            doesLike={doesLike}
            wantName={false}
            hookLike={hookLike}
            hookTotalLikes={hookTotalLikes}
            error={error}
            toggleLike={toggleLike}
            open={open}
            createComment={createComment}
            allComments={allComments}
            postedBy={postedBy}
            change={props.change}
          />
          
        </div>
      </div>
    </div>
  );
};

export default PostModal;
