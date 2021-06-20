import React from 'react';
import sanitizeHtml from 'sanitize-html';

export const prepositions = (value: string) => {
    return value
      ? value.replace(
          /(\s|^)(a|i|k|o|s|u|v|z)(\s(a|i|k|o|s|u|v|z))?(\s+)/gim,
          '$1$2$3\u00A0',
        )
      : '';
  };

interface Props {
  html?: string | null;
  style?: {};
}

const HtmlParser = ({ html, style }: Props) => {
  if (html == null) {
    return null;
  }
  const safeHtml = sanitizeHtml(prepositions(html));
  return <div dangerouslySetInnerHTML={{ __html: safeHtml }} style={style} />;
};

export default HtmlParser;
