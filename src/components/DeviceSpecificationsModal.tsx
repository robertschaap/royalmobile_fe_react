import React from 'react';
import { useContentCopy } from '../hooks';

import Modal from './Modal';
import Overlay from './Overlay';

const DeviceSpecificationsModal: React.FC = () => {
  return (
    <Overlay>
      <Modal header={useContentCopy('Device Specifications')}>
        Blaat
      </Modal>
    </Overlay>
  );
};

export default DeviceSpecificationsModal;
