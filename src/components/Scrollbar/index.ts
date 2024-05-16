import { css } from 'styled-components';

const Scrollbar = css`
  &::-webkit-scrollbar {
    width: 24px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.bgModal};
    border-radius: 50px;
    background-clip: padding-box;
    border: 8px solid transparent;
  }
`;

export default Scrollbar;
