import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import PostList from "@/components/posts/PostList";
import theme from "@/themes/theme";
import userEvent from "@testing-library/user-event";

const mockPosts = [
  { userId: 1, id: 1, title: "Post 1", body: "This is the body of post 1" },
  { userId: 1, id: 2, title: "Post 2", body: "This is the body of post 2" },
];

describe("PostList Component", () => {
  it("renders posts correctly", () => {
    render(
      <ThemeProvider theme={theme}>
        <PostList posts={mockPosts} />
      </ThemeProvider>
    );

    // Check if the titles are rendered
    expect(screen.getByText("Post 1")).toBeInTheDocument();
    expect(screen.getByText("Post 2")).toBeInTheDocument();

    // Check the number of rendered posts
    expect(screen.getAllByRole("listitem")).toHaveLength(2);

    // Check if clicking the post navigates to post detail page
    const postLink = screen.getByTestId(1);
    userEvent.click(postLink);
  });
});
