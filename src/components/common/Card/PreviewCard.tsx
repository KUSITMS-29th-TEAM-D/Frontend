import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { PlainChip } from '@/components/common/Chip/PlainChip';
import { userService } from '@/services/UserService';

interface PreviewCardProps {
  imageUrl: string;
  title: string;
  keywords: string[];
  path?: string;
}

export const PreviewCard = ({ imageUrl, title, keywords, path }: PreviewCardProps) => {
  const userState = userService.getUserState();
  const isExternal = path && (path.startsWith('http://') || path.startsWith('https://'));

  const CardLink = ({ children }: { children: React.ReactNode }) => {
    if (isExternal) {
      return (
        <a href={path} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    } else {
      if (userState === 'NON_MEMBER') {
        return (
          <div
            onClick={() => {
              window.alert('로그인이 필요한 서비스입니다.');
            }}
          >
            {children}
          </div>
        );
      }

      if (userState === 'PRE_MEMBER') {
        return (
          <div
            onClick={() => {
              window.alert('온보딩 진행 후 이용 가능합니다.');
            }}
          >
            {children}
          </div>
        );
      }

      return <Link to={path || ''}>{children}</Link>;
    }
  };

  return (
    <CardLink>
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
    </CardLink>
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
