import * as userApiConstant from "../apiConstants/userApiConstant";
import * as PostApiConstant from "../apiConstants/postApiConstant";
import { AuthConfigForWeb } from "../apiConstants/jwtConstant";
import * as DashboardRoutes from "../Routes/DashboardRoutes";
import M from "materialize-css";
//import cogoToast from 'cogo-toast';

class profileFunctions {
  constructor() {}

  
  static async fetchProfile(userId) {
    let res = await fetch(userApiConstant.getUserRoute(userId), {
      method: "get",
      headers: {
        Authorization: AuthConfigForWeb(),
      },
    });
    //console.log(AuthConfigForWeb())
    res = res.json();
    return res;
  }

  static async followRequestUser(userId) {
    let res = await fetch(userApiConstant.putRequestUserRoute(), {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: AuthConfigForWeb(),
      },
      body: JSON.stringify({ userId: userId }),
    });
    res = res.json();
    return res;
  }

  static async acceptFollowRequestUser(userId) {
    let res = await fetch(userApiConstant.putRequestAcceptUserRoute(), {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: AuthConfigForWeb(),
      },
      body: JSON.stringify({ userId: userId }),
    });
    res = res.json();
    return res;
  }

  static async deleteRequestUser(userId) {
    let res = await fetch(userApiConstant.putRequestDeleteUserRoute(), {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: AuthConfigForWeb(),
      },
      body: JSON.stringify({ userId: userId }),
    });
    console.log(res)
    res = res.json();
    return res;
  }

  static async unFollowUser(userId) {
    let res = await fetch(userApiConstant.putUnFollowUserRoute(), {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: AuthConfigForWeb(),
      },
      body: JSON.stringify({ userId: userId }),
    });
    res = res.json();
    return res;
  }

  static async searchUser(name) {
    let res = await fetch(userApiConstant.postSearchUserRoute(), {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: AuthConfigForWeb(),
      },
      body: JSON.stringify({ name: name }),
    });
    res = res.json();
    return res;
  }


  static async Deletelfun(postId,userId) {

    let res = await fetch(PostApiConstant.postDeletePost(), {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: AuthConfigForWeb(),
      },
      body: JSON.stringify({ postId: postId }),
    });
    //history.push(`/profile/${userId}`)
    DashboardRoutes.profileRoute()
    window.location.reload();
    res = res.json();
    return res;
  }

  static async CommentDel(postId,user,val) {
    console.log("postId",postId,"comment_By",user,"comment_ID",val)
    let res = await fetch(PostApiConstant.CommentDeletePost(), {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: AuthConfigForWeb(),
      },
      body: JSON.stringify({postId,user,val }),
    });
    //res = res.json();
    const data = res.json();
    console.log({data})
      if (data.error) {
        M.toast({ html: data.error, classes: "error_Toast" });
      } else {
        M.toast({ html:"comment deleted", classes: "success_Toast" });

      }
<<<<<<< HEAD
      // cogoToast.(`You have reached the bottom 😱!`, {
      //   position: 'bottom-right'
      // });
      // cogoToast

    // window.location.reload();
=======
>>>>>>> eb6d392c5339fd7bc3dc1a97c95fdf1cf9042572

    return data;
    
  }


static async AllUSER() {
 
  let res = await fetch(userApiConstant.Alluser(), {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: AuthConfigForWeb(),
    },
  });
  res = res.json();
  return res;
}


static async DeleteSelfRequest(userId) {
  console.log("deeltere")
  let res = await fetch(userApiConstant.deleteselfrequest(), {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      Authorization: AuthConfigForWeb(),
    },
    body: JSON.stringify({ userId: userId }),
  });
  res = res.json();
  return res;
}

// static async EditPost(postId,caption,media,history,M) {
//   let res = await fetch(PostApiConstant.EditPost(), {
//     method: "put",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: AuthConfigForWeb(),
//     },
//     body: JSON.stringify({ postId: postId,caption:caption,media:media }),
//   }).then((res)=>
//   {
//         res = res.json();
//          return res;
//   }).catch((error)=>
//   {
//     if (error) {
//       M.toast({ html: data.error, classes: "error_Toast" });
//     } else {
//       M.toast({ html: data.message, classes: "success_Toast" });
//       history.push("/");
//       history.push(DashboardRoutes.createProfileRoute(user._id));
//     }
//   })
  
// }
}





export default profileFunctions;
