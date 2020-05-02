import React from 'react';
import Modal from '.';

import { renderWithTheme } from '../../test/helpers';

describe('<Modal />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<Modal header={null}>""</Modal>);
  });
});
