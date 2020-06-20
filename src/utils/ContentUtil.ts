import content from '../constants/content';

export const ContentUtil = (messageId: string): string => {
  if (content && content[messageId]) {
    return content[messageId];
  }

  // eslint-disable-next-line no-console
  console.warn(`ContentUtil: messageId: "${messageId}" was not found, falling back to raw message`);
  return messageId;
};
