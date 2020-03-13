import React from 'react';
import { useContentCopy } from '../hooks';

interface ContentCopyProps {
  messageId: string;
}

const ContentCopy: React.FC<ContentCopyProps> = React.memo((props) => {
  const { messageId } = props;

  return (
    <>
      {useContentCopy(messageId)}
    </>
  );
});

export default ContentCopy;
