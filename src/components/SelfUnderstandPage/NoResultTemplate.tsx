import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { PlainButton } from '@/components/common/Button/PlainButton';
import { MY_UNDERSTAND_TAB } from '@/constants/navigation';

interface NoResultSectionProps {
  tab: (typeof MY_UNDERSTAND_TAB)[number]['tab'];
}
export const NoResultSection = ({ tab }: NoResultSectionProps) => {
  const navigate = useNavigate();

  return (
    <StyledContentContainer>
      <img src={MY_UNDERSTAND_TAB.find((item) => item.tab === tab)?.icon} alt={tab} />
      <div className="content-container">
        <span className="description">아직 테스트 이력이 없어요</span>
        <span className="title">테스트를 진행해주세요!</span>
      </div>
      <div className="button-container">
        <PlainButton
          width="352px"
          height="48px"
          // TODO: /home -> / 로 변경해야함.
          onClick={() =>
            navigate(MY_UNDERSTAND_TAB.find((item) => item.tab === tab)?.path || '/home')
          }
        >
          테스트 시작하기
        </PlainButton>
      </div>
    </StyledContentContainer>
  );
};

const StyledContentContainer = styled.div`
  padding: 97.5px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  img {
    width: 247px;
    height: 247px;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    .description {
      ${({ theme }) => theme.font.desktop.body1b};
      color: ${({ theme }) => theme.color.gray400};
    }

    .title {
      ${({ theme }) => theme.font.desktop.title1};
      color: ${({ theme }) => theme.color.gray800};
    }
  }

  .button-container {
    padding: 10px 0;
  }
`;
