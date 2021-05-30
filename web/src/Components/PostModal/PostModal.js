import React, { useRef } from "react";
import Comment from "../Comment/Comment";
<<<<<<< HEAD

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
=======
import profileFunctions from "../../utils/profile";
import {useHistory} from 'react-router-dom'
>>>>>>> eb6d392c5339fd7bc3dc1a97c95fdf1cf9042572
import PostLikeAndComment from "../PostLikeAndComment/PostLikeAndComment";
import "./PostModal.css";
import EditIcon from '@material-ui/icons/Edit';
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
console.log(profile_image)
  const myRef = useRef(null);
  const history =useHistory()
  return (
    <div className="Modal">
      <div className="Modal_div">
        <div className="Modal_img_container">
          <img
            src={media}
            className="Modal_img"
          />
        </div>
        <div className="overlay2" ><MoreHorizIcon fontSize="default" color="primary" /> </div>
        <div className="Modal_comment_wrapper">
          <div className="Modal_comment_container" ref={myRef}>
            {console.log(allComments)}
            <Comment
              name={name}
              comment={caption}
              profile_image={profile_image}
              userId={userId}
              postId={postId}
<<<<<<< HEAD
              caption={caption}

=======
              allComments={allComments}
              change={props.change}
>>>>>>> eb6d392c5339fd7bc3dc1a97c95fdf1cf9042572
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
<<<<<<< HEAD
                    caption={caption}
=======
                    allComments={allComments}
                    change={props.change}
>>>>>>> eb6d392c5339fd7bc3dc1a97c95fdf1cf9042572
                  />
                );
              }
            })}
          </div>
          <button onClick={()=>history.push({pathname:"/editpost",state:postId,userId:userId})}>"edit"</button>

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
