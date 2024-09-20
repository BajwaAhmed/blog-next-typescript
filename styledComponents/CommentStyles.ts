import { lineClamp } from "@/styledComponents/mixins";
import styled from "styled-components";

export const CommentCard = styled.li`
  list-style-type: none;
  background-color: ${(props) => props.theme.colors.cardPrimary};
  padding: ${(props) => props.theme.spacing.medium};
  margin-bottom: ${(props) => props.theme.spacing.medium};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.shadows.cardShadow};
  transition: box-shadow 0.2s;
  opacity: 0.7;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.small};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: ${(props) => props.theme.spacing.small};
  }
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${(props) => props.theme.spacing.small};
  }
`;

export const CommentName = styled.h3`
  font-size: ${(props) => props.theme.typography.subheading2};
  font-weight: bold;
  color: ${(props) => props.theme.colors.textPrimary};
  margin: 0;
  ${lineClamp(1)};
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: ${(props) =>
      props.theme.typography.body}; // Reduce size for mobile
  }
`;

export const CommentEmail = styled.a`
  font-size: ${(props) => props.theme.typography.body};
  color: burlywood;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 0.85rem; // Adjust the email font size for smaller screens
  }
`;

export const CommentBody = styled.p`
  font-size: ${(props) => props.theme.typography.body};
  color: ${(props) => props.theme.colors.textPrimary};
  margin-top: ${(props) => props.theme.spacing.small};
  line-height: 1.5;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 0.9rem; // Reduce font size for mobile
  }
`;
