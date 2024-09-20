import {
  Header,
  Heading,
  LayoutWrapper,
  MainContent,
} from "@/styledComponents/LayoutStyles";
import React from "react";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <LayoutWrapper>
      <Header>
        <Heading>{title}</Heading>
      </Header>
      <MainContent>{children}</MainContent>
    </LayoutWrapper>
  );
};

export default Layout;
