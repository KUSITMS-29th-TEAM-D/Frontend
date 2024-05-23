import styled from 'styled-components';

interface BrandChipProps {
  width?: string;
  children: React.ReactNode;
}

export const BrandChip = ({ width, children }: BrandChipProps) => {
  return <StyledContainer $width={width}>{children}</StyledContainer>;
};

const StyledContainer = styled.div<{ $width?: string }>`
  ${({ theme }) => theme.font.desktop.body1m};

  width: ${(props) => props.$width || 'auto'};
  height: 42px;
  padding: 0 16px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  white-space: nowrap;

  cursor: default;

  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.gray800};
`;
