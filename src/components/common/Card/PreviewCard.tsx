import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { PlainChip } from '@/components/common/Chip/PlainChip';

interface PreviewCardProps {
  imageUrl: string;
  title: string;
  keywords: string[];
  path?: string;
}

export const PreviewCard = ({ imageUrl, title, keywords, path }: PreviewCardProps) => {
  return (
    <Link to={path ? path : ''}>
      <StyledContainer>
        <StyledPreview $url={imageUrl} />
        <StyledInformation>
          <p className="title">{title}</p>
          <div className="keywords">
            {keywords.map((keyword) => (
              <PlainChip key={keyword} primary>
                {keyword}
              </PlainChip>
            ))}
          </div>
        </StyledInformation>
      </StyledContainer>
    </Link>
  );
};

const StyledContainer = styled.div`
  position: relative;

  width: 337px;
  height: 347px;

  border-radius: 16px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.13);

  overflow: hidden;
  cursor: pointer;

  .hot-item {
    position: absolute;
    top: 24px;
    left: 24px;
  }
`;

const StyledPreview = styled.div<{ $url: string }>`
  height: 193px;

  background: url(${(props) => props.$url});
  object-fit: cover;
`;

const StyledInformation = styled.div`
  padding: 20px;

  background: ${({ theme }) => theme.color.white};

  .title {
    height: 56px;
    margin-bottom: 16px;

    ${({ theme }) => theme.font.desktop.body1m};

    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .keywords {
    display: flex;
    gap: 13px;
  }
`;
