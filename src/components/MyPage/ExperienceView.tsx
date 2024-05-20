import React, { useState } from 'react';

import styled from 'styled-components';

import { ExperienceWholeView } from '@/components/MyPage/ExperienceWholeView';
import { Dropdown } from '@/components/common/Dropdown/Dropdown';
import { MyPageTab } from '@/components/common/Tab/MyPageTab';

export const ExperienceView = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
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
                contents={['1', '2']}
                selected={selectedCategory}
                placeholder=""
                clickContentHandler={(content) => handleCategoryChange(content)}
              />
            </StyledDropdownContainer>

            <button
              className="refresh-button"
              type="button"
              onClick={() => {
                setSelectedCategory('');
              }}
            >
              초기화
            </button>
          </StyledFilterContainer>
          <CardContainer>
            <ExperienceWholeView selectedCategory={selectedCategory} />
          </CardContainer>
        </div>
      ),
    },
    {
      id: 'tab2',
      label: '자기이해',
      content: <div>자기이해</div>,
    },
    {
      id: 'tab3',
      label: '브랜딩',
      content: <div>브랜딩</div>,
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
