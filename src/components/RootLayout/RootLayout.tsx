import React from 'react';
import styles from './RootLayout.module.scss';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = (props) => {
  const { children } = props;

  return (
    <div className={styles.component}>
      <main>
        {children}
      </main>
    </div>
  );
};

export default RootLayout;
