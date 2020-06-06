import { createContext, useContext } from 'react';
import contentCopy, { ContentCopy } from '../constants/contentCopy';

const ContentContext = createContext<ContentCopy>(contentCopy);

export const useContentCopy = (messageId: string): string => {
  const copy = useContext(ContentContext);

  if (copy && copy[messageId]) {
    return copy[messageId];
  }

  // eslint-disable-next-line no-console
  console.warn(`useContentCopy: messageId: "${messageId}" was not found, falling back to raw message`);
  return messageId;
};
