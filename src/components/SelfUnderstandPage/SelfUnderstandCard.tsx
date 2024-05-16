import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Card1 from '@/assets/backgrounds/understandCard1.png';
import Card2 from '@/assets/backgrounds/understandCard2.png';
import Card3 from '@/assets/backgrounds/understandCard3.png';
import { theme } from '@/styles';

interface OutlineProps {
  title: string;
  titleTextSize: boolean;
  subtitle: string;
  subtitleTextSize: boolean;
  footerText: string;
  footerTextSize?: boolean;
  titleColor: string;
  subtitleColor: string;
  footerTextColor: string;
  backgroundColor?: string;
  background?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
}

const Container = styled.button<{
  background?: string;
  width?: string;
  height?: string;
}>`
  position: relative;
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  padding: 24px;
  filter: drop-shadow(0px 4px 10px rgba(87, 11, 255, 0.15));
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background: ${(props) => props.background || 'transparent'};
`;

const Header = styled.div`
  align-self: stretch;
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
  position: relative;
  z-index: 1;
`;

const Title = styled.div<{ $color: string; $titleTextSize?: boolean }>`
  color: ${(props) => props.$color};
  ${(props) =>
    props.$titleTextSize ? props.theme.font.desktop.h2 : props.theme.font.desktop.title1};
`;

const Subtitle = styled.div<{ $color: string; $subtitleTextSize?: boolean }>`
  color: ${(props) => props.$color};
  ${(props) =>
    props.$subtitleTextSize ? props.theme.font.desktop.title2 : props.theme.font.desktop.body1m};
`;

const FooterText = styled.div<{ $color: string; $footerTextSize?: boolean }>`
  color: ${(props) => props.$color};
  ${(props) =>
    props.$footerTextSize ? props.theme.font.desktop.label1m : props.theme.font.desktop.label1m};
`;

const BackgroundImage = styled.div<{ $background: string; $width: string; $height: string }>`
  position: absolute;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  background-image: url(${(props) => props.$background});
  background-size: contain;
  z-index: 2;
`;

const Outline = ({
  title,
  titleTextSize,
  subtitle,
  subtitleTextSize,
  footerText,
  footerTextSize,
  titleColor,
  subtitleColor,
  footerTextColor,
  background,
  width,
  height,
  onClick,
}: OutlineProps) => (
  <Container background={background} width={width} height={height} onClick={onClick} type="button">
    <Header>
      <Title $color={titleColor} $titleTextSize={titleTextSize}>
        {title}
      </Title>
      <Subtitle $color={subtitleColor} $subtitleTextSize={subtitleTextSize}>
        {subtitle}
      </Subtitle>
    </Header>
    <FooterText $color={footerTextColor} $footerTextSize={footerTextSize}>
      {footerText}
    </FooterText>
    {background && (
      <BackgroundImage $background={background} $width={width || ''} $height={height || ''} />
    )}
  </Container>
);

const DesignComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/test/design/1');
  };

  return (
    <Outline
      title="Design"
      subtitle="설계하기"
      footerText="앞으로의 나를 브랜딩하고 싶다면?"
      titleColor={theme.color.primary500}
      subtitleColor={theme.color.gray800}
      footerTextColor={theme.color.primary800}
      background={`url(${Card3})`}
      titleTextSize={false}
      subtitleTextSize={false}
      footerTextSize={false}
      width="331.5px"
      height="210px"
      onClick={handleClick}
    />
  );
};

const DefineComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/test/define/1');
  };

  return (
    <Outline
      title="Define"
      subtitle="정의하기"
      footerText="현재의 나를 파악하고 싶다면?"
      titleColor={theme.color.primary500}
      subtitleColor={theme.color.gray800}
      footerTextColor={theme.color.primary800}
      background={`url(${Card2})`}
      titleTextSize={false}
      subtitleTextSize={false}
      footerTextSize={false}
      width="331.5px"
      height="210px"
      onClick={handleClick}
    />
  );
};
const DiscoverComponent = () => {
  //const navigate = useNavigate();

  const handleClick = () => {
    //navigate('/'); //TODO: 나중에 올바른 위치로 수정해야 함
  };

  return (
    <div style={{ position: 'relative' }}>
      <Outline
        title="Discover"
        subtitle="이해하기"
        footerText="셀피스를 만나기 전의 나를 알고 싶다면?"
        titleColor={theme.color.primary500}
        subtitleColor={theme.color.gray800}
        footerTextColor={theme.color.primary800}
        background={`url(${Card1})`}
        width="680px"
        height="246px"
        titleTextSize={true}
        subtitleTextSize={true}
        onClick={handleClick}
      />
    </div>
  );
};

export { DesignComponent, DefineComponent, DiscoverComponent };
