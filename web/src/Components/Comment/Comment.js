import React,{useState,useEffect} from "react";
import "./Comment.css";
import * as DashboardRoutes from "../../Routes/DashboardRoutes";
import { Link } from "react-router-dom";

import ClearIcon from '@material-ui/icons/Clear';
import profileFunctions from "../../utils/profile";
import { MdDragHandle } from "react-icons/md";


const Comment = (props) => {
  const { val ,name, comment, profile_image, userId ,postId,allComments,change,caption} = props;
     
console.log(postId)
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
        {/* {(use==userId && comment!=caption) ?<ClearIcon onClick= { ()=>profileFunctions.CommentDel(postId,userId,val) }   style={{marginLeft:"auto"}} color="disabled"  />:null } */}
        {console.log(caption)}
        {use===userId && comment!=caption ?<ClearIcon onClick={ ()=>{profileFunctions.CommentDel(postId,userId,val);handle();} }   style={{marginLeft:"auto"}} color="disabled"  />:null }
        
    </div>
    </div>
  );
};

export default Comment;
