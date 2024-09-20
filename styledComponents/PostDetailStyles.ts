import styled from "styled-components";

export const PostDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.medium};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: ${(props) => props.theme.spacing.small};
  }
`;
export const PostTitleWrapper = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.border}; /* Line on top */
  border-bottom: 1px solid ${(props) => props.theme.colors.border}; /* Line on top */
  padding: ${(props) => props.theme.spacing.medium};
`;
