import React from 'react';
import Modal from '../Modal';

import { renderWithTheme } from '../../test/helpers';

describe('<Modal />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<Modal header={null}>""</Modal>);
  });
});
