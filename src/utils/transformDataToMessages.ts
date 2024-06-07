import { ChattingStage } from '@/types/test.type';

export type ChattingListType = 'question' | 'answer' | 'reaction';
export type ChattingListUser = 'chatbot' | 'user';

export interface ChattingList {
  type: string;
  text: string;
  user: string;
}

export const transformDataToMessages = (data: { [key: string]: ChattingStage }) => {
  const messages: ChattingList[] = [];

  Object.keys(data).forEach((stageKey) => {
    const stage = data[stageKey];

    // 문제 텍스트를 \n 기준으로 나누어 처리
    stage.question.split('\n').forEach((questionPart) => {
      messages.push({ type: 'question', text: questionPart, user: 'chatbot' });
    });

    // 답변 텍스트를 \n 기준으로 나누어 처리
    stage.answer.split('\n').forEach((answerPart) => {
      messages.push({ type: 'answer', text: answerPart, user: 'user' });
    });

    // 반응 텍스트를 \n 기준으로 나누어 처리
    stage.reaction.split('\n').forEach((reactionPart) => {
      messages.push({ type: 'reaction', text: reactionPart, user: 'chatbot' });
    });
  });

  return messages;
};
