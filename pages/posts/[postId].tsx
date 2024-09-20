import Layout from "@/components/layout/Layout";
import PostDetail from "@/components/posts/PostDetail";
import Comment from "@/types/comments";
import Post from "@/types/post";
import { fetchComments, fetchPosts } from "@/services/postApi";
import { GetServerSideProps } from "next";

// Fetch all posts and comments dynamically on every request

const PostDetailPage = ({
  post,
  comments,
}: {
  post: Post;
  comments: Comment[];
}) => {
  return (
    <Layout title="Post Details">
      <PostDetail post={post} comments={comments} />
    </Layout>
  );
};

// As posts comments change often so we have to show the most recent data so we use getServerSideProps
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const postId = params?.postId;
  // Fetch all posts
  const posts = await fetchPosts();

  // Fetch all comments
  const comments = await fetchComments();

  // Find the post by the ID from the route params
  const post = posts.find((post) => `${post.id}` === postId);

  // Filter comments by the postId
  const postComments = comments.filter(
    (comment) => `${comment.postId}` === postId
  );

  // If post is not found, return a 404 page
  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      comments: postComments,
    },
  };
};

export default PostDetailPage;
