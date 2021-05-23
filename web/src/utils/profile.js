import * as userApiConstant from "../apiConstants/userApiConstant";
import * as PostApiConstant from "../apiConstants/postApiConstant";
import { AuthConfigForWeb } from "../apiConstants/jwtConstant";
// import * as DashboardRoutes from "../Routes/DashboardRoutes";


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

  static async Deletelfun(postId,history,userId) {

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
    //DashboardRoutes.profileRoute()
  }

  static async CommentDel(postId,user) {
    console.log(postId)
    let res = await fetch(PostApiConstant.CommentDeletePost(), {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: AuthConfigForWeb(),
      },
      body: JSON.stringify({ postId,user }),
    });
    res = res.json();
    return res;
  }

}





export default profileFunctions;