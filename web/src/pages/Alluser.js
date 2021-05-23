import React,{useEffect,useState} from 'react';
import profileFunctions from "../utils/profile";

const Alluser =(props)=>
{

    const [users,setusers]= useState([])
    const Aluser =async()=>
    {  
        let  user = await profileFunctions.AllUSER()
        console.log(user.searchResult)
        if(user)
        setusers(user.searchResult);
    }
     useEffect(()=>{
       Aluser()
     },[])
      
            return (
                <p>{users.map((user)=>(
                    <p>{user.name}{<img style={{width:100,height:100,objectfit:'cover'}} src={user.profile_image} alt="image" />}</p>
                ))}</p> 
            )
}
export default Alluser