import styled from 'styled-components';
import { breakpoint_up } from '../styles/theme';

export const calculatePercentage = (n?: number) => {
  if (n && n > 0 && n < 13) {
    return 100 / n;
  }

  return 100;
};

const gutters = {
  xs: 12,
  sm: 24,
  md: 32,
  lg: 32,
};

export const GridBase = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${gutters.xs / 2}px;

  @media ${breakpoint_up.sm} {
    margin: 0 -${gutters.sm / 2}px;
  }

  @media ${breakpoint_up.md} {
    margin: 0 -${gutters.md / 2}px;
  }

  @media ${breakpoint_up.lg} {
    margin: 0 -${gutters.lg / 2}px;
  }

`;

interface GridItemProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  spacing?: number;
}

/**
 * An alternative approach to GridItems. Instead of specifying how many columns
 * an item should span, speficy how many columns you want. If at small screens
 * your grid needs to be two columns, do <GridItem sm={2} />
 */
export const GridItem = styled.div<GridItemProps>`
  flex: 0 1 calc(${({ xs }) => calculatePercentage(xs)}% - ${gutters.xs}px);
  margin: 0 ${gutters.xs / 2}px;

  border: 1px solid pink;

  @media ${breakpoint_up.sm} {
    flex: 0 1 calc(${({ sm }) => calculatePercentage(sm)}% - ${gutters.sm}px);
    margin: 0 ${gutters.sm / 2}px;
  }

  @media ${breakpoint_up.md} {
    flex: 0 1 calc(${({ md }) => calculatePercentage(md)}% - ${gutters.md}px);
    margin: 0 ${gutters.md / 2}px;
  }

  @media ${breakpoint_up.lg} {
    flex: 0 1 calc(${({ lg }) => calculatePercentage(lg)}% - ${gutters.lg}px);
    margin: 0 ${gutters.lg / 2}px;
  }
`;
