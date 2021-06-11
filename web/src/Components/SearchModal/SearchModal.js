import React, { useState } from "react";
import SearchUser from "../SearchUser/SearchUser";
import profileFunctions from "../../utils/profile";
import "./SearchModal.css";
import CloseIcon from "@material-ui/icons/Close";
const SearchModal = (props) => {
  const { close ,closeModal} = props;

  const [data, setData] = useState([]);
  const searchData = async (name) => {
    if (name === "" || !name) {
      return;
    }
    let res = await profileFunctions.searchUser(name);
    setData(res.searchResult);
  };
  return (
    <>
    <div className="Search_Modal">
      <div className="Search_Modal_div">
        <div className="search_container">
          <input
            type="text"
            placeholder="Search"
            className="search_input"
            onChange={(e) => searchData(e.target.value)}
          />
        <CloseIcon className="sv" onClick={closeModal}  />
        </div>
        <div className="search_result_container">
          {data.map((data, index) => {
            return (
              <SearchUser
                profile_image={data.profile_image}
                userId={data._id}
                name={data.name}
                close={close}
                closeModal={closeModal}
              />
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
};

export default SearchModal;
