import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => props.theme.spacing.medium};
  min-height: 100vh;
`;

export const Header = styled.header`
  width: 100%;
  padding: ${(props) => props.theme.spacing.medium};
  color: ${(props) => props.theme.colors.heading};
  text-align: center;
`;

export const Heading = styled.h1`
  font-size: ${(props) => props.theme.typography.heading};
  margin: 0;
  font-family: ${(props) => props.theme.typography.fontFamily};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: ${(props) => props.theme.typography.subheading};
  }
`;

export const MainContent = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  padding: ${(props) => props.theme.spacing.medium};
  box-sizing: border-box;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: ${(props) => props.theme.spacing.small};
  }
`;
