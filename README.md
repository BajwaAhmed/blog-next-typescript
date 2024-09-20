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

├── components/              # Reusable UI components
│   ├── comments/            # Components related to comments
│   │   └── Comment.tsx      # Comment component
│   ├── layout/              # Layout-related components
│   │   └── Layout.tsx       # Layout component
│   └── posts/               # Post-related components
│       ├── PostDetail.tsx   # Post detail component
│       └── PostList.tsx     # Post list component
├── coverage/                # Code coverage reports
├── pages/                   # Next.js pages
│   ├── fonts/               # Custom fonts
│   ├── posts/               # Dynamic post pages
│   │   └── [postId].tsx     # Page for individual posts
│   ├── _app.tsx             # Custom App component
│   ├── _document.tsx        # Custom Document component
│   └── index.tsx            # Home page
├── public/                  # Public assets (images, fonts, etc.)
├── services/                # API service functions
│   └── postApi.ts           # API calls related to posts
├── styledComponents/        # Styled components for custom styling
│   ├── CommentStyles.ts     # Styling for Comment component
│   ├── Headings.ts          # Styling for headings
│   ├── LayoutStyles.ts      # Styling for Layout component
│   ├── mixins.ts            # Common mixins for styled-components
│   ├── PostDetailStyles.ts  # Styling for PostDetail component
│   └── PostListStyles.ts    # Styling for PostList component
├── styles/                  # Global CSS and other styles
│   ├── globals.css          # Global CSS file
├── tests/                   # Unit and integration tests
│   ├── PostDetail.test.tsx  # Tests for PostDetail component
│   └── PostList.test.tsx    # Tests for PostList component
├── themes/                  # Theming for the project
│   └── theme.ts             # Theme configuration
├── types/                   # TypeScript type definitions
│   ├── comments.ts          # Types for comments
│   └── post.ts              # Types for posts
├── .env.local               # Environment variables
├── .eslintrc.json           # ESLint configuration
├── jest.config.js           # Jest configuration
├── setupTests.ts            # Setup file for Jest tests
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
