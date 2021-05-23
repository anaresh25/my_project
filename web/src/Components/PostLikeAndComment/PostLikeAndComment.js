import React, { useState } from "react";
import "./PostLikeAndComment.css";


import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import M from "materialize-css";
import Comment from "../Comment/Comment";
import * as DashboardRoutes from "../../Routes/DashboardRoutes";
import { Link } from "react-router-dom";
import profileFunctions from "../../utils/profile";
import { useHistory } from "react-router-dom";


 import DeleteIcon from '@material-ui/icons/Delete';
// import { useDispatch } from 'react-redux';

import { AuthConfigForWeb } from "../../apiConstants/jwtConstant";

// import { useHistory } from "react-router-dom";



const PostLikeAndComment = (props) => {
  let {
    name,
    caption,
    wantName,
    hookLike,
    hookTotalLikes,
    toggleLike,
    open,
    allComments,
    createComment,
    postId,
    userId,
    
  } = props;
  const toggleFunc = () => {
    toggleLike();
  };
  const [commentText, setCommentText] = useState();
  const iconSize = 30;


  const history = useHistory();


  const createCommentFunc = () => {
    if (commentText === "" || !commentText) {
      M.toast({ html: "Please fill comment box", classes: "error_Toast" });
      return;
    }
    createComment(commentText, postId);
    setCommentText(' ')
  };


const a = localStorage.getItem('user')
 const use= JSON.parse(a)._id
 console.log(use,userId)
  return (
    <div className="Post_Detail_Container">
      <div className="Post_Row_Container" style={{ marginLeft: "-0.5rem" }}>
        {hookLike ? (
          <MdFavorite
            size={iconSize}
            style={{ color: "red" }}
            onClick={toggleFunc}
          />
        ) : (
          
          <MdFavoriteBorder
            size={iconSize}
            style={{ fill: "black" }}
            onClick={toggleFunc}
          />
        )}

        {/* <MdInsertComment
          size={iconSize}
          style={{ color: "black", marginLeft: "10px" }}
        /> */}
      <p className="Post_Title_Text"> &nbsp;{hookTotalLikes} </p>



      {(use===userId)?
      <DeleteIcon  type="submit" onClick= { ()=>profileFunctions.Deletelfun(postId,history,userId)  } />
      
      : null}
      </div>

      {wantName ? (
        <div>
          <div className="Post_Row_Container">
            <Link
              to={DashboardRoutes.createProfileRoute(userId)}
              style={{ textDecoration: "none" }}
            >
              <span className="Post_Title_Text">{name}</span>
            </Link>
            <span className="Post_Title_Comment_Text"> {caption}</span>
          </div>
          <div className="Post_comment_text">
            <span onClick={open}>
              {allComments.length > 0
                ? `View all ${allComments.length} comments`
                : "Be the first one to comment"}
            </span>
          </div>
          {allComments.map((comment, index) => {
            
             {
              return (
                <Comment
                  // key={comment._id}
                  val={comment._id}
                  name={comment.postedBy.name}
                  comment={comment.comment}
                  userId={comment.postedBy._id}
                />
              );
            } 
          })}
        </div>
      ) : null}

      <div
        className="Post_Row_Container"
        style={{ alignItems: "none", margin: "0.2rem 0" }}
      >
        <input
          placeholder="add a comment"
          className="inputComment"
          value={commentText}
          onKeyUp={(e) => {
            if (e.key === " ") {
              setCommentText((prev) => prev + " ");
            }
          }}
          onChange={(e) => setCommentText(e.target.value)}
        />

        <button  onClick={createCommentFunc}>
           Post
        </button>
      </div>
    </div>
  );
};

export default PostLikeAndComment;
