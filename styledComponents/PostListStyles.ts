import styled from "styled-components";

export const PostListWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const PostItemWrapper = styled.li`
  border-top: 1px solid ${(props) => props.theme.colors.border}; /* Line on top */
  border-bottom: 1px solid ${(props) => props.theme.colors.border}; /* Line on bottom */
  box-shadow: ${(props) => props.theme.shadows.cardShadow};
  padding: ${(props) => props.theme.spacing.medium};
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    height: 200px;
  }
  cursor: pointer;
`;

export const PostItem = styled.div`
  padding: ${(props) => props.theme.spacing.medium};
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.cardPrimary};
  box-shadow: ${(props) => props.theme.shadows.cardShadow};
  transition: transform 0.2s, box-shadow 0.2s;
  height: 150px;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const PostTitle = styled.h2`
  font-size: ${(props) => props.theme.typography.subheading};
  font-family: ${(props) => props.theme.typography.fontFamily};
  margin-bottom: ${(props) => props.theme.spacing.small};
  color: ${(props) => props.theme.colors.textPrimary};
`;

export const PostBody = styled.p`
  color: ${(props) => props.theme.colors.cardTextSecondary};
  font-size: ${(props) => props.theme.typography.body};
`;
