import React from 'react';

interface PageTitleProps {
  title?: string;
  page?: string;
}

const PageTitle: React.FC<PageTitleProps> = React.memo((props): null => {
  const { page, title = "RoyalMobile" } = props;

  if (!page) {
    document.title = title;
  } else {
    document.title = title + " - " + page;
  }

  return null;
});

export default PageTitle;
