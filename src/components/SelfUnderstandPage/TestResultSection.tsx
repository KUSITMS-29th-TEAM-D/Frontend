import { useState } from 'react';

import styled, { css } from 'styled-components';

import DefineIcon from '@/assets/icons/defineBlack.png';
import DesignIcon from '@/assets/icons/designBlack.png';
import DiscoverIcon from '@/assets/icons/discoverBlack.png';
import { DefineResultView } from '@/components/SelfUnderstandPage/DefineResultView';
import { DesignResultView } from '@/components/SelfUnderstandPage/DesignResultView';
import { DiscoverResultView } from '@/components/SelfUnderstandPage/DiscoverResultView';

const TAB_LIST = [
  { tab: 'Discover', icon: DiscoverIcon, path: '/' },
  { tab: 'Define', icon: DefineIcon, path: '/test/define' },
  { tab: 'Design', icon: DesignIcon, path: '/test/design' },
];

type TabType = (typeof TAB_LIST)[number]['tab'];

export const TestResultSection = () => {
  const [tabState, setTabState] = useState<TabType>(TAB_LIST[0].tab);

  return (
    <StyledContainer>
      <StyledTabContainer>
        {TAB_LIST.map((item) => (
          <StyledTab
            key={item.tab}
            $active={item.tab === tabState}
            onClick={() => setTabState(item.tab)}
          >
            {item.tab}
          </StyledTab>
        ))}
      </StyledTabContainer>
      {tabState === 'Discover' && <DiscoverResultView />}
      {tabState === 'Define' && <DefineResultView />}
      {tabState === 'Design' && <DesignResultView />}
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  position: relative;

  background: ${({ theme }) => theme.color.white};
  padding-top: 84px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledTabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  width: 100%;
  position: absolute;
  top: 10px;
  left: 0;
`;

const StyledTab = styled.button<{ $active: boolean }>`
  padding: 20px 32px;
  border-bottom: 4px solid transparent;

  ${({ theme }) => theme.font.desktop.body1m};
  color: ${({ theme }) => theme.color.gray400};
  background: transparent;

  ${({ theme, $active }) =>
    $active &&
    css`
      color: ${({ theme }) => theme.color.primary500};

      border-color: ${theme.color.primary500};
    `}
`;
