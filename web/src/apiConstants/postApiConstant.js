
export const postCreatePostRoute = () => "/createPost";

export const getAllFollowingPostRoute=(pageNo)=>`/getAllFollowingPost/${pageNo}`;

export const getPostsRoute = (pageNo) => `/allPost/${pageNo}`;

export const getLoggedInUserPostsRoute = () => "/getLoggedInUserPosts";

export const putLikePostRoute = () => "/likePost";

export const putUnLikePostRoute = () => "/unLikePost";

export const putCommentPostRoute = () => "/commentPost";

export const postDeletePost=()=>`/deletePost`


export const CommentDeletePost=()=>`/deleteComment`