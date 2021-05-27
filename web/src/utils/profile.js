import * as userApiConstant from "../apiConstants/userApiConstant";
import * as PostApiConstant from "../apiConstants/postApiConstant";
import { AuthConfigForWeb } from "../apiConstants/jwtConstant";
// import * as DashboardRoutes from "../Routes/DashboardRoutes";
import M from "materialize-css";


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
    res = res.json();
    return res;
    //DashboardRoutes.profileRoute()
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
    return data;
    
  }

static async Deletelfun(postId,userId,history) {
  let res = await fetch(PostApiConstant.postDeletePost(), {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      Authorization: AuthConfigForWeb(),
    },
    body: JSON.stringify({ postId: postId }),
  });
  history.push(`/profile/${userId}`)
  res = res.json();
  return res;
}
// static async CommentDel(postId,commentId) {
//   console.log(postId)
//   let res = await fetch(PostApiConstant.CommentDeletePost(), {
//     method: "delete",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: AuthConfigForWeb(),
//     },
//     body: JSON.stringify({ postId,commentId }),
//   });
//   res = res.json();
//   return res;
// }
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
}





export default profileFunctions;
