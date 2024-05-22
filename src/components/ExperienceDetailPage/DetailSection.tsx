import { useEffect, useState } from 'react';

import { styled } from 'styled-components';

import { PlainButton } from '@/components/common/Button/PlainButton';
import { PlainChip } from '@/components/common/Chip/PlainChip';
import { ExperienceDetailModal } from '@/components/common/Modal/ExperienceDetailModal';
import { ProgramDetailResult } from '@/types/program.type';

const DetailSection = ({ data }: { data: ProgramDetailResult | undefined }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [participants, setParticipants] = useState<number>(data ? data.participants : 0);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    if (data) setParticipants(data.participants);
  }, [data]);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleIncreaseParticipants = () => {
    setParticipants((prev) => prev + 1);
    setButtonDisabled(true);
    setModalOpen(false);
  };

  if (data)
    return (
      <StyledContainer>
        <ProgramImageContainer>
          <img src={data.imageUrl} alt="Detail" />
        </ProgramImageContainer>
        <DetailContainer>
          <TextContainer>
            <PlainChip primary={true} width="max-content">
              {participants}명 참여 중!
            </PlainChip>
            <TitleContainer>{data.name}</TitleContainer>
            <SubTitleContainer>{data.oneLineDescription}</SubTitleContainer>
          </TextContainer>
          <ProfileContainer>
            <ProfileImageContainer>
              <img src={data.providerImage} alt="profile" />
            </ProfileImageContainer>
            <ProfileTextContainer>
              <ProfileTitleContainer>{data.providerName}</ProfileTitleContainer>
              <ProfileSubTitleContainer>
                {data.providerJob} | {data.providerKeyword}
              </ProfileSubTitleContainer>
            </ProfileTextContainer>
          </ProfileContainer>
          <PlainButton
            variant="gray"
            width="100%"
            height="48px"
            onClick={handleOpenModal}
            disabled={isButtonDisabled}
          >
            신청하기
          </PlainButton>
        </DetailContainer>
        <ExperienceDetailModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onConfirm={handleIncreaseParticipants}
        />
      </StyledContainer>
    );
};

export default DetailSection;
const StyledContainer = styled.div`
  display: flex;
  gap: 32px;
`;

const ProgramImageContainer = styled.div`
  width: 597px;
  height: 373px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DetailContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TextContainer = styled.div`
  flex: 1 1 0;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TitleContainer = styled.div`
  color: ${({ theme }) => `${theme.color.gray700}`};
  ${({ theme }) => theme.font.desktop.title1};
  word-break: break-word;
  overflow-wrap: break-word;
`;

const SubTitleContainer = styled.div`
  color: ${({ theme }) => `${theme.color.gray500}`};
  ${({ theme }) => theme.font.desktop.body2m};
  word-break: break-word;
  overflow-wrap: break-word;
`;

const ProfileContainer = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => `${theme.color.white}`};
  border-radius: 8px;
  word-break: break-word;
  overflow-wrap: break-word;
  border: 2px solid ${({ theme }) => `${theme.color.gray150}`};

  display: flex;
  gap: 16px;
`;

const ProfileImageContainer = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileTextContainer = styled.div`
  word-wrap: break-all;
  overflow-wrap: break-word;

  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ProfileTitleContainer = styled.div`
  color: ${({ theme }) => `${theme.color.gray700}`};
  ${({ theme }) => theme.font.desktop.body1m};
`;

const ProfileSubTitleContainer = styled.div`
  width: 100%;
  text-overflow: ellipsis;
  word-break: break-word;
  overflow-wrap: break-word;
  color: ${({ theme }) => `${theme.color.gray700}`};
  ${({ theme }) => theme.font.desktop.body2m};
`;
