import React, { useState } from 'react';

interface DeviceImageProps {
  modelId: string;
  color: string;
}

const DeviceImage: React.FC<DeviceImageProps> = React.memo((props) => {
  const { color, modelId } = props;

  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <img
        data-testid="device-image-fallback"
        alt="phone"
        src="/images/fallback.jpg"
        width="100%" />
    );
  }

  return (
    <img
      data-testid="device-image"
      alt="phone"
      onError={() => setHasError(true)}
      src={`/images/${modelId}-${color}.jpg`}
      width="100%" />
  );
});

export default DeviceImage;
