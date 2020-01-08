import { createContext, useContext } from 'react';
import contentCopy, { ContentCopy } from '../constants/contentCopy';

const ContentContext = createContext<ContentCopy>(contentCopy);

// eslint-disable-next-line import/prefer-default-export
export const useContentCopy = (messageId: string): string => {
  const copy = useContext(ContentContext);

  if (copy && copy[messageId]) {
    return copy[messageId];
  }

  // eslint-disable-next-line no-console
  console.warn(`useContentCopy: messageId: ${messageId} not found, falling back to raw message`);
  return messageId;
};
