import { css } from "styled-components";

// Reusable single-line clamp mixin
export const lineClamp = (lines: number) => css`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${lines};
  -webkit-box-orient: vertical;
  white-space: normal;
  text-overflow: ellipsis;
`;
