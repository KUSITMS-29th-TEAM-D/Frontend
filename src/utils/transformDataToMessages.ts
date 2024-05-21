import { ChattingStage } from '@/types/test.type';

export interface ChattingList {
  type: 'question' | 'answer' | 'reaction';
  text: string;
  user: 'chatbot' | 'user';
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
