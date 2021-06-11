import React, { useState ,useEffect} from "react";
import SearchUser from "../SearchUser/SearchUser";
import profileFunctions from "../../utils/profile";
import "./SearchModal.css";
import CloseIcon from "@material-ui/icons/Close";

const SearchModal = (props) => {
  const { close ,closeModal} = props;

    const [users,setusers]= useState([])
    const Aluser =async()=>
    {  
        let  user = await profileFunctions.AllUSER()
        console.log(user.searchResult)
        setusers(user.searchResult);
    }
     useEffect(()=>{
       Aluser()
     },[])
  return (
    <div className="Search_Modal">
      <div className="Search_Modal_div">
        <div className="search_result_container">
        <CloseIcon className="sv" onClick={closeModal}  />
          {users.map((data, index) => {
              console.log(data)
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
  );
};

export default SearchModal;