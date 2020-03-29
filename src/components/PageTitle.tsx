import React from 'react';

interface PageTitleProps {
  page?: string;
}

const PageTitle: React.FC<PageTitleProps> = React.memo((props): null => {
  const { page } = props;

  if (page) {
    document.title = `RoyalMobile - ${page}`;
  } else {
    document.title = 'RoyalMobile';
  }

  return null;
});

export default PageTitle;
