import { createContext, useContext } from "react";

interface ContentCopy {
  [key: string]: string;
}

const contentCopy: ContentCopy = Object.freeze({
  "common.errorMissing": "Something should've been here, but it isn't.",

  "navigation.business": "For Your Business",
  "navigation.consumer": "Products For You",
  "navigation.contact": "Contact",
  "navigation.help": "Help",
  "navigation.home": "Home",
  "navigation.myAccount": "My Account",

  "usp.freeShipping": "Free Shipping on All Orders",
  "usp.noConnectionFeeAcquisition": "No Connection Fee For New Customers",
  "usp.noFalsePromises": "Guaranteed no False Promises",
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
