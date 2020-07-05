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
        alt="phone"
        src="/images/fallback.png"
        width="100%" />
    );
  }

  return (
    <img
      alt="phone"
      onError={() => setHasError(true)}
      src={`/images/${modelId}-${color}.png`}
      width="100%" />
  );
});

export default DeviceImage;
