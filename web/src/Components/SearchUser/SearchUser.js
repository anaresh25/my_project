import React from "react";
import * as DashboardRoutes from "../../Routes/DashboardRoutes";
import {  useHistory } from "react-router-dom";
import "./SearchUser.css";

const SearchUser = (props) => {
  const history = useHistory();
  const { profile_image, userId, name, close ,closeModal } = props;
  const submit = () => {
    history.push(DashboardRoutes.createProfileRoute(userId));
    close();
    closeModal();
  };
  return (
    <div onClick={submit} className="searchUserContainer">
      <img src={profile_image} className="searchUserImg" />

      <span className="searchUserImgName">{name}</span>
    </div>
  );
};

export default SearchUser;
