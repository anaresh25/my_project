import React, { useState, useRef,useContext } from "react";
import * as postApiConstant from "../../apiConstants/postApiConstant";
import M from "materialize-css";
import "./CreatePost.css";
import * as DashboardRoutes from "../../Routes/DashboardRoutes";
import { AuthConfigForWeb } from "../../apiConstants/jwtConstant";
import { useHistory } from "react-router";
import { UserContext } from "../../App";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


const CreatePost = (props) => {
  const [imagePreview, setImagePreview] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const fileRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  const { user } = state;
  const postId = props.location.state
  console.log(props)
  const PostData = async () => {
    if (!image && !imagePreview) {
      M.toast({ html: "Please fill every input", classes: "error_Toast" });
      return;
    }
    console.log(postApiConstant.EditPost());
    try {
      setLoading(true);
      const res = await fetch(postApiConstant.EditPost(), {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: AuthConfigForWeb(),
        },
        body: JSON.stringify({ postId,caption,media:imagePreview }),
      });
      const data = await res.json();
      console.log(data)
      if (data.error) {
        M.toast({ html: data.error, classes: "error_Toast" });
      } else {
        M.toast({ html: data.message, classes: "success_Toast" });
        // history.push("/");
        history.push(DashboardRoutes.createProfileRoute(user._id));
      }
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const setImgFunc = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
    }
  };
  return (
    <div className="Create_Post_Page_Container">
      <div className="Create_Post_Card">
        <span className="echo">Create post</span>
        <div
          className="Upload_Image_Container"
          onClick={() => {
            fileRef.current.click();
          }}
        >
          {!imagePreview ? (
            // <span className="Post_Title_Comment_Text">Upload Image</span>
            <PhotoCamera/>
          ) : (
            <img src={imagePreview} className="Upload_Image" />
          )}
          <input
            type="file"
            ref={fileRef}
            onChange={setImgFunc}
            hidden
            accept="imagePreview/*"
          />
        </div>
        {/* <input
          type="text"
          placeholder="enter a caption"
          className="input"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        /> */}
        <TextField id="standard-basic" label="Caption" 
        type="text"
        className="input"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        />
        {!loading ? (
          // <button className="authbutton" onClick={PostData} >
          //   Create 
          // </button>
          <Button variant="contained" color="default" onClick={PostData} style={{marginTop:"5px"}} startIcon={<CloudUploadIcon />}>
          Upload
        </Button>
        ) : (
          <div className="Post_Title_Comment_Text">Uploading</div>
        )}
      </div>
    </div>
  );
};

export default CreatePost;
