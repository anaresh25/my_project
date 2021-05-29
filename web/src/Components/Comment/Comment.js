import React from "react";
import "./Comment.css";
import * as DashboardRoutes from "../../Routes/DashboardRoutes";
import { Link } from "react-router-dom";

// import ClearIcon from '@material-ui/icons/Clear';
import profileFunctions from "../../utils/profile";


const Comment = (props) => {
  const { val ,name, comment, profile_image, userId ,postId} = props;


  const a = localStorage.getItem('user')
 const use= JSON.parse(a)._id
 //console.log(use,userId)
  
  return (
    <div className="commentContainer">
      {profile_image && (
        <div className="commentImgContainer">
          <img src={profile_image} className="commentImg" />
        </div>
      )}
      <div className="comment_Container">
        <Link
          to={DashboardRoutes.createProfileRoute(userId)}
          style={{ textDecoration: "none" }}
        >
          <span className="Modal_postedBy_Text">{name} </span>
        </Link>
        <span className="Modal_Comment_Text">{comment}</span>
        {use==userId?<button onClick= { ()=>profileFunctions.CommentDel(postId,userId,val) }   style={{marginLeft:"auto"}} color="disabled"  />:null }
        
    </div>
    </div>
  );
};

export default Comment;
