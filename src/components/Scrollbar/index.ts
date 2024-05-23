import { css } from 'styled-components';

const Scrollbar = css`
  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.bgModal};
    border-radius: 50px;
    background-clip: padding-box;
    border: 4px solid transparent;
  }
`;

export default Scrollbar;
