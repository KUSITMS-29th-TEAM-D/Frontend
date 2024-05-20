import { useState } from 'react';

import styled from 'styled-components';

import { ExperienceWholeView } from '@/components/MyPage/ExperienceWholeView';
import { Dropdown } from '@/components/common/Dropdown/Dropdown';
import Tabs from '@/components/common/Tab/Tab';

interface Filter {
  title: string;
  contents: string[];
  selected: string | string[];
}

const wholeFilter: Filter[] = [
  {
    title: '정렬 ',
    contents: ['1', '2'],
    selected: ' ',
  },
];

export const ExperienceView = () => {
  const [filters, setFilters] = useState<Filter[]>(wholeFilter);

  const handleFilterChange = (index: number, selected: string | string[]) => {
    const newFilters = [...filters];
    newFilters[index].selected = selected;
    setFilters(newFilters);
  };

  const tabs = [
    {
      id: 'tab1',
      label: '전체',
      content: (
        <div>
          <StyledFilterContainer>
            <StyledDropdownContainer>
              {filters.map((filter, index) => (
                <Dropdown
                  key={filter.title}
                  title={filter.title}
                  contents={filter.contents}
                  selected={filter.selected}
                  placeholder={''}
                  clickContentHandler={(content) => handleFilterChange(index, content)}
                />
              ))}
            </StyledDropdownContainer>

            <button
              className="refresh-button"
              type="button"
              onClick={() => {
                setFilters(
                  filters.map((filter) => ({
                    ...filter,
                    selected: '',
                  }))
                );
              }}
            >
              초기화
            </button>
          </StyledFilterContainer>
          <CardContainer>
            <ExperienceWholeView />
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
      <Tabs tabs={tabs} />
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
