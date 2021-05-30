import React,{useState,useEffect} from "react";
import "./Comment.css";
import * as DashboardRoutes from "../../Routes/DashboardRoutes";
import { Link } from "react-router-dom";

import ClearIcon from '@material-ui/icons/Clear';
import profileFunctions from "../../utils/profile";
import { MdDragHandle } from "react-icons/md";


const Comment = (props) => {
<<<<<<< HEAD
  const { val ,name, comment, profile_image, userId ,postId,caption} = props;


=======
  const { val ,name, comment, profile_image, userId ,postId,allComments,change} = props;
     
console.log(postId)
>>>>>>> eb6d392c5339fd7bc3dc1a97c95fdf1cf9042572
  const a = localStorage.getItem('user')
 const use= JSON.parse(a)._id
  
 const handle=()=>
 {
   console.log("dfdfjs")
   props.change(2)
 }
  
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
<<<<<<< HEAD
        {(use==userId && comment!=caption) ?<ClearIcon onClick= { ()=>profileFunctions.CommentDel(postId,userId,val) }   style={{marginLeft:"auto"}} color="disabled"  />:null }
=======
        {use===userId||userId===undefined?<ClearIcon onClick={ ()=>{profileFunctions.CommentDel(postId,userId,val);handle();} }   style={{marginLeft:"auto"}} color="disabled"  />:null }
>>>>>>> eb6d392c5339fd7bc3dc1a97c95fdf1cf9042572
        
    </div>
    </div>
  );
};

export default Comment;
