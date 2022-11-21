import React from 'react';
import { Image as Img } from 'theme-ui';

export default function Image({ src, ...rest }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Img src={src} {...rest} />;
}
