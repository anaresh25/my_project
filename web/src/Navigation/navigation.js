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

const Navigation = () => {
  const { state, dispatch } = useContext(UserContext);
  const [users,setusers] =useState(false)
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
                <img src={user.profile_image} className="nav-profile" />
                <span className="nav-link" style={{ fontSize: "1.6rem" ,cursor:"default" }}  >
                  {user.name}
                </span>
              </div>

              <div class="dropdown-content">
                <li onClick={navigateToProfile}>
                  <CgProfile size={iconSize} />
                  <span className="nav-link">Profile</span>
                </li>
                <li onClick={open}>
                  <MdSearch size={iconSize} onClick={()=>setsearchuser(!searchuser)} />
                  <span className="nav-link">Search</span>
                </li>
                <li onClick={navigateToCreate}>
                  <MdAdd size={iconSize} />
                  <span className="nav-link">Create</span>
                </li>
                <li onClick={navigateToRequest}>
                  <FaUserFriends size={iconSize} />
                  <span className="nav-link">Follow Requests</span><em style={{background:'red',margin:"10px",borderRadius:"1%"}}>{data.length}</em>
                </li>
                <li onClick={open}>
                  <FaUserFriends size={iconSize} onClick={()=>setusers(!users)} />
                  <span className="nav-link">All User</span>
                </li>
                <li
                  style={{ borderTop: "1px solid grey" }}
                  onClick={logoutFunc}
                >
                  <span className="nav-link"> Logout</span>
                </li>
              </div>
            </div>
          </li>
          <li
                  style={{cursor:"pointer"}}
                  onClick={logoutFunc}
                >
                  <span className="nav-link"> Logout</span>
                </li>
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
          <Link
            to={user ? "/" : authRoutes.logInRoute()}
            className="nav-logoLink"
          >
            ECHO
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


