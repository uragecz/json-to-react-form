import {
    space,
    color,
    lineHeight,
    fontSize,
    textAlign,
    fontWeight,
    SpaceProps,
    FontSizeProps,
    FontWeightProps,
    TextAlignProps,
    ColorProps,
    LineHeightProps,
  } from 'styled-system';
  import styled from '@emotion/styled';

  export type TextProps = SpaceProps &
    LineHeightProps &
    ColorProps &
    FontSizeProps &
    TextAlignProps &
    FontWeightProps;

  const Text = styled('span')<TextProps>`
    ${space};
    ${color};
    ${lineHeight};
    ${fontSize};
    ${fontWeight};
    ${textAlign};
  `;

  Text.displayName = 'Text';

  export default Text;
