import { useState } from 'react';

import { styled } from 'styled-components';

import TestImage from '@/assets/test1.png';
import { PlainButton } from '@/components/common/Button/PlainButton';
import { PlainChip } from '@/components/common/Chip/PlainChip';
import { Modal } from '@/components/common/Modal/modal';

export const DetailSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <StyledContainer>
      <ImageContainer>
        <img src={Dummy1.imageURL} />
      </ImageContainer>
      <DetailContainer>
        <TextContainer>
          <PlainChip>{Dummy1.participants}명 참여 중!</PlainChip>
          <TitleContainer>{Dummy1.title}</TitleContainer>
          <SubTitleContainer>{Dummy1.subtitle}</SubTitleContainer>
        </TextContainer>
        <ProfileContainer>
          <ProfileImageContainer>
            <img src={Dummy1.profileImageURL} alt="profile" />
          </ProfileImageContainer>
          <ProfileTextContainer>
            <ProfileTitleContainer>{Dummy1.profileTitle}</ProfileTitleContainer>
            <ProfileSubTitleContainer>{Dummy1.profileSubtitle}</ProfileSubTitleContainer>
          </ProfileTextContainer>
        </ProfileContainer>
        <PlainButton variant="gray" height="48px" onClick={handleOpenModal}>
          신청하기
        </PlainButton>
      </DetailContainer>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}></Modal>
    </StyledContainer>
  );
};

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

const Dummy1 = {
  imageURL: TestImage,
  profileImageURL: TestImage,
  participants: 28,
  title: '퍼스널 브랜딩, ‘나’를 기획, 디자인하기',
  subtitle:
    '대한민국은 국제평화의 유지에 노력하고 침략적 전쟁을 부인한다. 국민의 모든 자유와 권리는 국가안전보장·질서유지 또는 공공복리를 위하여 필요한 경우에 한하여 법률로써 제한할 수 있으며.대한민국은 국제평화의 유지에 노력하고 침략적 전쟁을 부인한다.',
  profileTitle: '신민선',
  profileSubtitle: '콘텐츠 마케터 | 퍼스널브랜딩 | 어쩌구',
};
