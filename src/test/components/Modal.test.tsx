import React from 'react';
import Modal from '../../components/Modal';

import { renderWithTheme } from '../helpers';

describe('<Modal />', () => {
  it('should render without crashing', () => {
    renderWithTheme(<Modal header={null}>""</Modal>);
  });
});
