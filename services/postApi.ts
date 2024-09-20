import Comment from "@/types/comments";
import Post from "@/types/post";

export const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/posts`);
  const posts = await res.json();
  return posts;
};

export const fetchComments = async (): Promise<Comment[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/comments`);
  const posts = await res.json();
  return posts;
};
