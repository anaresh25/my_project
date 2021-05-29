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
 import TextField from '@material-ui/core/TextField';
 import Button from '@material-ui/core/Button';
 import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import Badge from '@material-ui/core/Badge';

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
 //console.log(use,userId)
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

      
      <Badge
        color="secondary"
        badgeContent={hookTotalLikes}
        anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
        }}
        max={9}
      >
      &nbsp;<ThumbUpAltOutlinedIcon color="primary"/>
        
      </Badge>



      {(use===userId)?
      
      <DeleteIcon style={{marginLeft:"auto"}} type="submit" onClick= { ()=>profileFunctions.Deletelfun(postId,userId)  } />
      
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
            {/* {console.log(allComments)} */}
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
                  postId={postId}
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
      
        
        <TextField id="standard-basic" label="Comment" value={commentText}  className="inputComment"
        onKeyUp={(e) => {
          if (e.key === " ") {
            setCommentText((prev) => prev + " ");
          }
          
        }}
        onChange={(e) => setCommentText(e.target.value)}
        size="small"
        />
        <Button variant="contained" color="secondary"  onClick={createCommentFunc} >Comment</Button>


      </div>
    </div>
  );
};

export default PostLikeAndComment;
