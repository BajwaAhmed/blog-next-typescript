import PostDetail from "@/components/posts/PostDetail";
import theme from "@/themes/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

describe("PostDetail Component", () => {
  it("renders only comments with the matching postId", () => {
    const mockPost = {
      userId: 4,
      id: 1,
      title: "Post Title",
      body: "Post body",
    };

    const mockComments = [
      {
        postId: 1,
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        body: "This is a comment for post 1",
      },
      {
        postId: 1,
        id: 2,
        name: "Jane Doe",
        email: "jane@example.com",
        body: "Another comment for post 1",
      },
    ];

    // Render PostDetail with post and comments
    render(
      <ThemeProvider theme={theme}>
        <PostDetail post={mockPost} comments={mockComments} />
      </ThemeProvider>
    );

    // Verify post title and body are displayed
    expect(screen.getByText("Post Title")).toBeInTheDocument();
    expect(screen.getByText("Post body")).toBeInTheDocument();

    // Verify only comments with postId === 1 are displayed
    expect(
      screen.getByText("This is a comment for post 1")
    ).toBeInTheDocument();
  });
});
