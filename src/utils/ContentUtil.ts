import contentCopy from '../constants/contentCopy';

export const ContentUtil = (messageId: string): string => {
  if (contentCopy && contentCopy[messageId]) {
    return contentCopy[messageId];
  }

  // eslint-disable-next-line no-console
  console.warn(`ContentUtil: messageId: "${messageId}" was not found, falling back to raw message`);
  return messageId;
};
