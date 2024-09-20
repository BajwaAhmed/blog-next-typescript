import styled from "styled-components";

export const H1 = styled.h1`
  font-size: ${(props) => props.theme.typography.heading};
  font-weight: bold;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: ${(props) => props.theme.spacing.medium};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 1.75rem; /* Adjust for mobile */
  }
`;

export const H2 = styled.h2`
  font-size: ${(props) => props.theme.typography.subheading1};
  font-weight: bold;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: ${(props) => props.theme.spacing.medium};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 1.5rem; /* Adjust for mobile */
  }
`;

export const H3 = styled.h3`
  font-size: ${(props) => props.theme.typography.subheading2};
  font-weight: bold;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: ${(props) => props.theme.spacing.small};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 1.25rem; /* Adjust for mobile */
  }
`;

export const H4 = styled.h4`
  font-size: ${(props) => props.theme.typography.body};
  font-weight: bold;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: ${(props) => props.theme.spacing.small};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 1rem; /* Adjust for mobile */
  }
`;
