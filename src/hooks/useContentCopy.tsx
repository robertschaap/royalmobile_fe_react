import React, { createContext, useContext } from "react";

interface ContentCopyType {
  [key: string]: string;
}

const contentCopy: ContentCopyType = Object.freeze({

});

const ContentContext = createContext<ContentCopyType>(contentCopy);

export const useContentCopy = (messageId: string): string => {
  const copy = useContext(ContentContext);

  if (copy && copy[messageId]) {
    return copy[messageId];
  }

  console.warn(`useContentCopy: messageId: ${messageId} not found, falling back to raw message`);
  return messageId;
};
