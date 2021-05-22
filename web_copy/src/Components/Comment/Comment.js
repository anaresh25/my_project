import React from "react";
import "./Comment.css";
import * as DashboardRoutes from "../../Routes/DashboardRoutes";
import { Link } from "react-router-dom";
import profileFunctions from "../../utils/profile";
import DeleteIcon from '@material-ui/icons/Delete';

const Comment = (props) => {
  console.log(props)
  const { val,name, comment, profile_image, userId } = props;

        const commentdelete =(id,user)=>
        {
               console.log(id,user)
                profileFunctions.CommentDel(id,user)
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
        {/* <button onClick={()=>commentdelete(val,userId)}>delete</button> */}
        <DeleteIcon onClick={()=>commentdelete(val,userId)}>delete</DeleteIcon>

      </div>
    </div>
  );
};

export default Comment;
