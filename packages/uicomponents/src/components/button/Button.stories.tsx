import React from 'react';

import {Button, ButtonProps} from './Button';

export default {
  title: 'Button',
  component: Button
};

export const Basic = (args: ButtonProps): JSX.Element => <Button {...args} />;
Basic.args = {
  title: 'Hello World',
  onClick: () => {
      console.log("Hello");
  }
};