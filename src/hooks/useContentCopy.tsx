import { createContext, useContext } from 'react';

interface ContentCopy {
  [key: string]: string;
}

const contentCopy: ContentCopy = Object.freeze({
  'common.errorMissing': "Something should've been here, but it isn't.",
  'common.mobile': 'Mobile',
  'common.royal': 'Royal',
  'common.royalMobile': 'RoyalMobile',

  'navigation.business': 'For Your Business',
  'navigation.consumer': 'Products For You',
  'navigation.contact': 'Contact',
  'navigation.help': 'Help',
  'navigation.home': 'Home',
  'navigation.myAccount': 'My Account',
  'navigation.ourProducts': 'Our Products',

  'benefits.get': 'GET',
  'benefits.threeMonthsFree': 'Three months free inside of your regular bundle when you refer a friend',
  'benefits.doubleData': 'Double data in your bundle plus a 5 euro discount when you combine with Royal Internet',

  'usp.freeShipping': 'Free Shipping on All Orders',
  'usp.noConnectionFeeAcquisition': 'No Connection Fee For New Customers',
  'usp.noFalsePromises': 'Guaranteed no False Promises',
});

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
