import { useState } from 'react';

import styled from 'styled-components';

import { MyExperienceWholeView } from '@/components/MyPage/MyExperienceWholeView';
import { Dropdown } from '@/components/common/Dropdown/Dropdown';
import { MyPageTab } from '@/components/common/Tab/MyPageTab';
import { MyPageFilter } from '@/types/myPage.type';

interface MyExperienceViewTemplateProps {
  title: string | React.ReactNode;
  subTitle: string;
  backgroundColor: string;
  filters: MyPageFilter[];
}

export const MyExperienceView = ({
  filters,
}: Omit<MyExperienceViewTemplateProps, 'title' | 'subTitle' | 'backgroundColor'>) => {
  const [programDate, setProgramDate] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<string>('desc');

  const resetFilters = () => {
    setProgramDate([]);
    setSortOrder('desc');
    filters.forEach((filter: MyPageFilter) => filter.setSelected([]));
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
                width="312px"
                contentMaxHeight="172px"
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
                width="312px"
                contentMaxHeight="172px"
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
                width="312px"
                contentMaxHeight="172px"
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
  padding-top: 81px;
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
