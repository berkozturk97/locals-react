import React from 'react';
import { StyledCheckbox } from '../components/checkbox';

export default {
  title: 'Checkbox',
  component: StyledCheckbox,
};

const Template = () => <StyledCheckbox />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Checkbox',
};
