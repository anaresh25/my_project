const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth");
const postController = require("../controllers/post");
const postRoutes = require("../apiConstants/postApiConstant");
const upload = require("../utils/multer");

router.post(
  postRoutes.postCreatePostRoute(),
  authController.requireLogin,
  postController.createPost
);

router.get(
  postRoutes.getPostsRoute(),
  authController.requireLogin,
  postController.getAllPost
);

router.get(
  postRoutes.getAllFollowingPostRoute(),
  authController.requireLogin,
  postController.getAllFollowingPost
);

router.get(
  postRoutes.getLoggedInUserPostsRoute(),
  authController.requireLogin,
  postController.getLoggedInUserPosts
);

router.put(
  postRoutes.putLikePostRoute(),
  authController.requireLogin,
  postController.likePost
);

router.put(
  postRoutes.putUnLikePostRoute(),
  authController.requireLogin,
  postController.unLikePost
);

router.put(
  postRoutes.putCommentPostRoute(),
  authController.requireLogin,
  postController.commentOnPost
);

router.delete(
  postRoutes.postDeletePost(),
  authController.requireLogin,
  postController.deletePost
);

router.delete(
  postRoutes.CommentDeletePost(),
  authController.requireLogin,
  postController.CommentDeletePost
);

router.put(
  postRoutes.EditPost(),
  authController.requireLogin,
  postController.EditPost
)

// router.delete(
//   postRoutes.CommentDeletePost(),
//   authController.requireLogin,
//   postController.deleteComment

// );


module.exports = router;
