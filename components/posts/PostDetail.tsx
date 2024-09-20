import CommentsList from "@/components/comments/Comment";
import Comment from "@/types/comments";
import Post from "@/types/post";
import { H2, H3 } from "@/styledComponents/Headings";
import {
  PostDetailWrapper,
  PostTitleWrapper,
} from "@/styledComponents/PostDetailStyles";
import React from "react";

interface PostDetailProps {
  post: Post;
  comments: Comment[];
}

const PostDetail: React.FC<PostDetailProps> = ({ post, comments }) => {
  return (
    <PostDetailWrapper>
      <PostTitleWrapper>
        <H2>{post.title}</H2>
        <p>{post.body}</p>
      </PostTitleWrapper>
      <H3>Comments</H3>
      <CommentsList comments={comments} />
    </PostDetailWrapper>
  );
};

export default PostDetail;
