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
    messages.push({ type: 'question', text: stage.question, user: 'chatbot' });
    messages.push({ type: 'answer', text: stage.answer, user: 'user' });
    messages.push({ type: 'reaction', text: stage.reaction, user: 'chatbot' });
  });

  return messages;
};
