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
<<<<<<< HEAD

router.delete(
  postRoutes.CommentDeletePost(),
  authController.requireLogin,
  postController.CommentDeletePost
=======
router.delete(
  postRoutes.CommentDeletePost(),
  authController.requireLogin,
  postController.deleteComment
>>>>>>> 42e11b99842ce8f5affa30569caffb479e4ef6f8
);


module.exports = router;
