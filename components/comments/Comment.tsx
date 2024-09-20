import React from "react";
import {
  CommentBody,
  CommentCard,
  CommentEmail,
  CommentHeader,
} from "@/styledComponents/CommentStyles";
import { H4 } from "@/styledComponents/Headings";
import Comment from "@/types/comments";

interface CommentProps {
  comments: Comment[];
}

const CommentsList: React.FC<CommentProps> = ({ comments }) => {
  return (
    <ul>
      {comments.map((comment) => (
        <CommentCard key={comment.id}>
          <CommentHeader>
            <H4>{comment.name}</H4>
            <CommentEmail href={`mailto:${comment.email}`}>
              {comment.email}
            </CommentEmail>
          </CommentHeader>
          <CommentBody>{comment.body}</CommentBody>
        </CommentCard>
      ))}
    </ul>
  );
};

export default CommentsList;
