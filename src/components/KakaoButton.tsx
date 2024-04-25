import React from 'react';

const KakaoLoginButton: React.FC = () => {
  const KakakButtonClick = () => {
    const redirectUrl = process.env.OAUTH_KAKAO_REDIRECT_URI;
    if (redirectUrl) {
      window.location.href = redirectUrl;
    } else {
      console.error('찾을 수 없음');
    }
  };

  return <button onClick={KakakButtonClick}>카카오 로그인</button>;
};

export default KakaoLoginButton;
