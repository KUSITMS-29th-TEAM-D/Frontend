import { useState } from 'react';

import { styled } from 'styled-components';

import { PlainButton } from '@/components/common/Button/PlainButton';
import { PlainChip } from '@/components/common/Chip/PlainChip';
import { ExperienceDetailModal } from '@/components/common/Modal/ExperienceDetailModal';

interface DetailData {
  imageURL: string;
  profileImageURL: string;
  participants: number;
  title: string;
  subtitle: string;
  profileTitle: string;
  profileSubtitle: string;
  progranURL: string;
}

const DetailSection = ({ data }: { data: DetailData }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [participants, setParticipants] = useState(data.participants);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleIncreaseParticipants = () => {
    setParticipants((prevParticipants) => prevParticipants + 1);
    setButtonDisabled(true);
    setModalOpen(false);
  };

  return (
    <StyledContainer>
      <ImageContainer>
        <img src={data.imageURL} alt="Detail" />
      </ImageContainer>
      <DetailContainer>
        <TextContainer>
          <PlainChip primary={true}>{participants}명 참여 중!</PlainChip>
          <TitleContainer>{data.title}</TitleContainer>
          <SubTitleContainer>{data.subtitle}</SubTitleContainer>
        </TextContainer>
        <ProfileContainer>
          <ProfileImageContainer>
            <img src={data.profileImageURL} alt="profile" />
          </ProfileImageContainer>
          <ProfileTextContainer>
            <ProfileTitleContainer>{data.profileTitle}</ProfileTitleContainer>
            <ProfileSubTitleContainer>{data.profileSubtitle}</ProfileSubTitleContainer>
          </ProfileTextContainer>
        </ProfileContainer>
        <PlainButton
          variant="gray"
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
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
  display: inline-flex;
`;

const ImageContainer = styled.div`
  width: 597px;
  height: 373px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const DetailContainer = styled.div`
  flex: 1 1 0;
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
`;

const TextContainer = styled.div`
  align-self: stretch;
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
`;

const TitleContainer = styled.div`
  align-self: stretch;
  color: ${({ theme }) => `${theme.color.gray700}`};
  ${({ theme }) => theme.font.desktop.title1};
`;

const SubTitleContainer = styled.div`
  align-self: stretch;
  color: ${({ theme }) => `${theme.color.gray500}`};
  ${({ theme }) => theme.font.desktop.body2m};
`;

const ProfileContainer = styled.div`
  align-self: stretch;
  padding: 16px;
  background-color: ${({ theme }) => `${theme.color.white}`};
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid ${({ theme }) => `${theme.color.gray150}`};
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  display: inline-flex;
`;

const ProfileImageContainer = styled.div`
  width: 56px;
  height: 56px;
  background: linear-gradient(0deg, #f4efff 0%, #f4efff 100%);
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileTextContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  display: inline-flex;
`;

const ProfileTitleContainer = styled.div`
  color: ${({ theme }) => `${theme.color.gray700}`};
  ${({ theme }) => theme.font.desktop.body1m};
`;

const ProfileSubTitleContainer = styled.div`
  color: ${({ theme }) => `${theme.color.gray700}`};
  ${({ theme }) => theme.font.desktop.body2m};
`;
