import { PERSONA_DESCRIPTION } from '@/constants/persona';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

export const kakaoShare = (persona: string, resultId: string) => {
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
  }

  window.Kakao.Share.sendCustom({
    templateId: 107989,
    templateArgs: {
      description: PERSONA_DESCRIPTION[persona],
      resultId: resultId,
    },
  });
};
