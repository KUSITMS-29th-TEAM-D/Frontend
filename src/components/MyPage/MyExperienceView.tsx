import { useState } from 'react';

import styled from 'styled-components';

import { MyBrandingView } from '@/components/MyPage/MyBrandingView';
import { MyExperienceWholeView } from '@/components/MyPage/MyExperienceWholeView';
import { MyUnderstandingView } from '@/components/MyPage/MyUnderstandingView';
import { Dropdown } from '@/components/common/Dropdown/Dropdown';
import { MyPageTab } from '@/components/common/Tab/MyPageTab';

export const MyExperienceView = () => {
  const [programDate, setProgramDate] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<string>('desc');

  const resetFilters = () => {
    setProgramDate([]);
    setSortOrder('desc');
  };

  const tabs = [
    {
      id: 'tab1',
      label: '전체',
      content: (
        <div>
          <StyledFilterContainer>
            <StyledDropdownContainer>
              <Dropdown
                title="정렬"
                placeholder=" "
                contents={['최신순', '오래된순']}
                selected={sortOrder === 'desc' ? ['최신순'] : ['오래된순']}
                clickContentHandler={(newSelected: string) => {
                  setSortOrder(newSelected === '최신순' ? 'desc' : 'asc');
                }}
                width="201px"
                multiple={false}
              />
            </StyledDropdownContainer>

            <button className="refresh-button" type="button" onClick={resetFilters}>
              초기화
            </button>
          </StyledFilterContainer>
          <CardContainer>
            <MyExperienceWholeView programData={programDate} sortOrder={sortOrder} />{' '}
          </CardContainer>
        </div>
      ),
    },
    {
      id: 'tab2',
      label: '자기이해',
      content: (
        <div>
          <StyledFilterContainer>
            <StyledDropdownContainer>
              <Dropdown
                title="정렬"
                placeholder=" "
                contents={['최신순', '오래된순']}
                selected={sortOrder === 'desc' ? ['최신순'] : ['오래된순']}
                clickContentHandler={(newSelected: string) => {
                  setSortOrder(newSelected === '최신순' ? 'desc' : 'asc');
                }}
                width="201px"
                contentMaxHeight="172px"
                multiple={false}
              />
            </StyledDropdownContainer>

            <button className="refresh-button" type="button" onClick={resetFilters}>
              초기화
            </button>
          </StyledFilterContainer>
          <CardContainer>
            <MyUnderstandingView programData={programDate} sortOrder={sortOrder} />{' '}
          </CardContainer>
        </div>
      ),
    },
    {
      id: 'tab3',
      label: '브랜딩',
      content: (
        <div>
          <StyledFilterContainer>
            <StyledDropdownContainer>
              <Dropdown
                title="정렬"
                placeholder=" "
                contents={['최신순', '오래된순']}
                selected={sortOrder === 'desc' ? ['최신순'] : ['오래된순']}
                clickContentHandler={(newSelected: string) => {
                  setSortOrder(newSelected === '최신순' ? 'desc' : 'asc');
                }}
                width="201px"
                contentMaxHeight="172px"
                multiple={false}
              />
            </StyledDropdownContainer>

            <button className="refresh-button" type="button" onClick={resetFilters}>
              초기화
            </button>
          </StyledFilterContainer>
          <CardContainer>
            <MyBrandingView programData={programDate} sortOrder={sortOrder} />{' '}
          </CardContainer>
        </div>
      ),
    },
  ];

  return (
    <StyledContainer>
      <MyPageTab tabs={tabs} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: var(--top-navigation-height);
  padding-bottom: 52px;
`;

const CardContainer = styled.div`
  padding: 24px;
  display: flex;
`;

const StyledFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;

  .refresh-button {
    ${({ theme }) => theme.font.desktop.body1m};
    color: ${({ theme }) => theme.color.primary700};
  }
`;

const StyledDropdownContainer = styled.div`
  display: flex;
  gap: 12px;
`;
