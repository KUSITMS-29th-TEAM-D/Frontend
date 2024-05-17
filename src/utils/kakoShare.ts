declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

export const kakoShare = () => {
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
  }

  // 기획팀이 넘겨주는 내용으로 수정 필요
  window.Kakao.Share.sendCustom({
    templateId: 107989,
    templateArgs: {
      result: '',
      link: '',
    },
  });
};
