import { mount } from "marketing/Marketing";

import React from 'react';

export default () => {
  const ref = React.useRef();

  React.useEffect(() => {
    mount(ref.current);
  }, [])

  return <div ref={ref} ></div>
}