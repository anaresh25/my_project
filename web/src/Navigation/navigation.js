import React, {
  useContext,
  useRef,
  useEffect,
  useState,
  useCallback,
} from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { UserContext } from "../App";
import * as authRoutes from "../Routes/AuthRoutes";
import * as DashboardRoutes from "../Routes/DashboardRoutes";
import { MdSearch, MdAdd } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa";
import useModal from "react-hooks-use-modal";
import SearchModal from "../Components/SearchModal/SearchModal";
import "./navigation.css";
import AllUser from '../Components/SearchModal/Alluser'

import useStyles from './styles';
import Logo from"../images/memoriesLogo.png";
import Text from"../images/logo/color_1.jpg";
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';
import Badge from '@material-ui/core/Badge';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import InputBase from '@material-ui/core/InputBase';

// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles } from '@material-ui/core/styles';
// import SearchBar from "material-ui-search-bar";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import { Button } from "@material-ui/core";



const Navigation = () => {
  const { state, dispatch } = useContext(UserContext);
  const [users,setusers] =useState(false)
  const classes = useStyles();
  const [searchuser,setsearchuser] =useState(false)
  const { user } = state;
  const [Modal, open, close, isOpen] = useModal("root", {
    preventScroll: true,
  });
  const history = useHistory();
  const iconSize = 26;
  const data = state.user ? state.user.requestedBy : [];
 
  const renderList = useCallback(() => {
    const logoutFunc = () => {
      localStorage.clear();
      dispatch({ type: "CLEAR" });
      history.push(authRoutes.logInRoute());
    };
    const navigateToProfile = () => {
      history.push(DashboardRoutes.createProfileRoute(user._id));
    };
    const navigateToCreate = () => {
      history.push(DashboardRoutes.createPostRoute());
    };
    const navigateToRequest = () => {
      history.push(DashboardRoutes.followersRoute());
    };
   


    if (user) {
      return (
        <>
          <li> 
            <div className="dropdown">
              <div className="nav-profile-container">
                <img src={user.profile_image} className="nav-profile"  style={{cursor:"pointer"}} />
                <span className="nav-link" style={{ fontSize: "1.6rem" ,cursor:"default" }}  >
                  {user.name}
                </span>
              </div>

              <div class="dropdown-content">
                <li onClick={navigateToProfile}>
                  <PersonIcon color="primary"  />
                  <span className="nav-link" style={{cursor:"default"}}>Profile</span>
                </li>
                <li onClick={open}>
                  <SearchIcon size={iconSize} onClick={()=>setsearchuser(!searchuser)}  style={{cursor:"pointer"}} color="action" />
                  <span className="nav-link" style={{cursor:"default"}}>Search</span>
                </li>
                <li onClick={navigateToCreate}  >
                  {/* <IconButton color="primary" aria-label="upload picture" component="span" >
                    
                  </IconButton> */}
                  <PhotoCamera />
                  <span className="nav-link"  style={{cursor:"default"}} >Create</span>
                  
                </li>
                <li onClick={navigateToRequest}>
                  {/* <FaUserFriends size={iconSize} /> */}
                  {(data.length)?<Badge badgeContent={data.length} color="secondary"> <NotificationsIcon color="primary" max={9}/> </Badge>:<NotificationsOffIcon />}
                  <span className="nav-link" style={{cursor:"default"}} >Follow Requests</span>
                  
          
                </li>
                <li onClick={open}  >
                  <GroupIcon color="disabled" fontSize="large" onClick={()=>setusers(!users)}  />
                  <span className="nav-link" style={{cursor:"default"}} >All User</span>
                </li>
                <li
                  style={{ borderTop: "1px solid grey" }}
                  onClick={logoutFunc}
                >
                  <span className="nav-link" style={{cursor:"default"}} > Logout</span>
                </li>
              </div>
            </div>
          </li>
          <Button
                  variant="contained" color="default"
                  style={{cursor:"pointer"}}
                  onClick={logoutFunc}
                  startIcon={<ExitToAppIcon />}
                >
                   Logout
                </Button>
        </>
      );
    } else {
      return null;
    }
  }, [user]);

  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__logo">
          {/* <Link
            to={user ? "/" : authRoutes.logInRoute()}
            className="nav-logoLink"
          >
            ECHO
          </Link> */}
          <Link to={user ? "/" : authRoutes.logInRoute()} className={classes.brandContainer}>
          <img component={Link} to="/" src={Text} alt="icon" height="45px" />
          <img className={classes.image} src={Logo} alt="icon" height="40px" />
          </Link>
        </div>
        <div className="toolbar_navigation-items">
          <ul>{renderList()}</ul>
        </div>
      </nav>
      { searchuser && <Modal>
        <SearchModal close={close} />
      </Modal> }
      { users && <Modal>
        <AllUser close={close}/>
      </Modal> }
    </header>
  );
};

export default Navigation;


