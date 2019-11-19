import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

/**
 * Wraps Link component from react-router-dom and removes link styling.
 */
const Link = styled(RouterLink)`
  color: unset;
  text-decoration: unset;
`;

export default Link;
