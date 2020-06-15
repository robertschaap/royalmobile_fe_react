import React from 'react';
import { ContentUtil } from '../../utils/ContentUtil';

interface ContentCopyProps {
  messageId: string;
}

const ContentCopy: React.FC<ContentCopyProps> = React.memo((props) => {
  const { messageId } = props;

  return (
    <>
      {ContentUtil(messageId)}
    </>
  );
});

export default ContentCopy;
