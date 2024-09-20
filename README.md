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
│ │ └── Comment.tsx 
│ ├── layout/
│ │ └── Layout.tsx 
│ └── posts/
│ ├── PostDetail.tsx 
│ └── PostList.tsx
├── coverage/ 
├── pages/
│ ├── fonts/ 
│ ├── posts/
│ │ └── [postId].tsx 
│ ├── \_app.tsx 
│ ├── \_document.tsx 
│ └── index.tsx 
├── public/ 
├── services/
│ └── postApi.ts 
├── styledComponents/
│ ├── CommentStyles.ts
│ ├── Headings.ts 
│ ├── LayoutStyles.ts 
│ ├── mixins.ts
│ ├── PostDetailStyles.ts
│ └── PostListStyles.ts 
├── styles/
│ ├── globals.css 
├── tests/
│ ├── PostDetail.test.tsx 
│ └── PostList.test.tsx
├── themes/
│ └── theme.ts 
├── types/
│ ├── comments.ts 
│ └── post.ts 
├── .env.local 
├── .eslintrc.json
├── jest.config.js
├── setupTests.ts
├── tsconfig.json 
└── README.md 
