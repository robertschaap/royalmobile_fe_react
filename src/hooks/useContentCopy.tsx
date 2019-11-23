import { createContext, useContext } from "react";

interface ContentCopy {
  [key: string]: string;
}

const contentCopy: ContentCopy = Object.freeze({

});

const ContentContext = createContext<ContentCopy>(contentCopy);

export const useContentCopy = (messageId: string): string => {
  const copy = useContext(ContentContext);

  if (copy && copy[messageId]) {
    return copy[messageId];
  }

  console.warn(`useContentCopy: messageId: ${messageId} not found, falling back to raw message`);
  return messageId;
};
