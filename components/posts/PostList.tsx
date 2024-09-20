import React from "react";
import {
  PostBody,
  PostItem,
  PostItemWrapper,
  PostListWrapper,
  PostTitle,
} from "@/styledComponents/PostListStyles";
import Link from "next/link";
import Post from "@/types/post";

const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <PostListWrapper>
      {posts.map((post) => (
        <PostItemWrapper key={post.id}>
          <PostItem>
            <Link data-testid={post.id} href={`/posts/${post.id}`} passHref>
              <PostTitle className="clamp-text-2">{post.title}</PostTitle>
              <PostBody className="clamp-text-3">{post.body}</PostBody>
            </Link>
          </PostItem>
        </PostItemWrapper>
      ))}
    </PostListWrapper>
  );
};

export default PostList;
