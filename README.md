## Blog Post Application with Next.js

This project is built using Next.js and TypeScript to display a list of blog posts and associated comments. The data is fetched from an external API using Server-Side Rendering (SSR). The project also implements error handling and tests using Jest and React Testing Library.

## Table of Contents

Installation
Getting Started
Running the Application
Environment Variables
Testing
Project Structure

## Installation

git clone https://github.com/BajwaAhmed/blog-next-typescript

## Getting Started

npm install

## Running the Application

npm run dev

## Testing

npm run test

## Project Structure

.
├── components/
│ ├── comments/
│ │ └── Comment.tsx # Component for rendering individual comments
│ ├── layout/
│ │ └── Layout.tsx # Layout component for the overall page structure
│ └── posts/
│ ├── PostDetail.tsx # Renders detailed view of a post with comments
│ └── PostList.tsx # Displays the list of posts
├── coverage/ # Folder for test coverage reports
├── pages/
│ ├── fonts/ # Font assets for the project
│ ├── posts/
│ │ └── [postId].tsx # Dynamic route page for post details
│ ├── \_app.tsx # Global Next.js App component
│ ├── \_document.tsx # Custom Document for SSR
│ └── index.tsx # Main homepage displaying post list
├── public/ # Static assets such as images and other public files
├── services/
│ └── postApi.ts # API functions for fetching posts and comments
├── styledComponents/
│ ├── CommentStyles.ts # Styled components for comments
│ ├── Headings.ts # Styled components for headings
│ ├── LayoutStyles.ts # Styled components for Layout
│ ├── mixins.ts # Common mixins for styled components
│ ├── PostDetailStyles.ts # Styled components for PostDetail
│ └── PostListStyles.ts # Styled components for PostList
├── styles/
│ ├── globals.css # Global styles for the entire application
├── tests/
│ ├── PostDetail.test.tsx # Unit tests for PostDetail component
│ └── PostList.test.tsx # Unit tests for PostList component
├── themes/
│ └── theme.ts # Theme configuration for the project
├── types/
│ ├── comments.ts # Type definitions for comments
│ └── post.ts # Type definitions for posts
├── .env.local # Environment variables for the project
├── .eslintrc.json # ESLint configuration
├── jest.config.js # Jest configuration for running tests
├── setupTests.ts # Setup file for testing environment
├── tsconfig.json # TypeScript configuration
└── README.md # Project documentation
