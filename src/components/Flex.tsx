import styled from '@emotion/styled'
import { typography, space, color, flexbox, TypographyProps, SpaceProps, FlexboxProps, LayoutProps, layout, PositionProps, position } from 'styled-system'

export type CustomFlexProps =
 TypographyProps &
 FlexboxProps &
 LayoutProps &
 PositionProps &
 SpaceProps;

interface Props extends CustomFlexProps {
  row?: boolean;
}

const Flex = styled('div')<Props>`
  display: flex;
  ${flexbox};
  ${typography};
  ${space};
  ${color};
  ${layout};
  ${position};
`;

export default Flex;