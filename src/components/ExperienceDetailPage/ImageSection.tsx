import { styled } from 'styled-components';

export const ImageSection = ({ description }: { description: string | undefined }) => {
  return <StyledContainer>{description && <img src={description} alt="Detail" />}</StyledContainer>;
};

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  display: inline-flex;
`;
