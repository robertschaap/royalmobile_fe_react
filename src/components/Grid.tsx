import styled from 'styled-components';
import { media_breakpoint_up } from '../styles/theme';

export const calculatePercentage = (n?: number) => {
  if (n && n > 0 && n < 13) {
    return 100 / n;
  }

  return 100;
};

const gutter_column = {
  xs: 12,
  sm: 24,
  md: 32,
  lg: 32,
};

const gutter_row = {
  xs: 8,
  sm: 8,
  md: 12,
  lg: 12,
};

export const GridBase = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${gutter_column.xs / 2}px;

  ${media_breakpoint_up.sm} {
    margin: 0 -${gutter_column.sm / 2}px;
  }

  ${media_breakpoint_up.md} {
    margin: 0 -${gutter_column.md / 2}px;
  }

  ${media_breakpoint_up.lg} {
    margin: 0 -${gutter_column.lg / 2}px;
  }

`;

interface GridItemProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;

  xsOrder?: number;
  smOrder?: number;
  mdOrder?: number;
  lgOrder?: number;
}

/**
 * An alternative approach to GridItems. Instead of specifying how many columns
 * an item should span, speficy how many columns you want. If at small screens
 * your grid needs to be two columns, do <GridItem sm={2} />
 */
export const GridItem = styled.div<GridItemProps>`
  flex: 0 1 calc(${({ xs }) => calculatePercentage(xs)}% - ${gutter_column.xs}px);
  order: ${({ xsOrder }) => xsOrder || 0};
  margin: 0 ${gutter_column.xs / 2}px;
  margin-bottom: ${gutter_row.xs}px;

  ${media_breakpoint_up.sm} {
    flex: 0 1 calc(${({ sm }) => calculatePercentage(sm)}% - ${gutter_column.sm}px);
    order: ${({ smOrder }) => smOrder || 0};
    margin: 0 ${gutter_column.sm / 2}px;
    margin-bottom: ${gutter_row.sm}px;
  }

  ${media_breakpoint_up.md} {
    flex: 0 1 calc(${({ md }) => calculatePercentage(md)}% - ${gutter_column.md}px);
    order: ${({ mdOrder }) => mdOrder || 0};
    margin: 0 ${gutter_column.md / 2}px;
    margin-bottom: ${gutter_row.md}px;
  }

  ${media_breakpoint_up.lg} {
    flex: 0 1 calc(${({ lg }) => calculatePercentage(lg)}% - ${gutter_column.lg}px);
    order: ${({ lgOrder }) => lgOrder || 0};
    margin: 0 ${gutter_column.lg / 2}px;
    margin-bottom: ${gutter_row.lg}px;
  }
`;
