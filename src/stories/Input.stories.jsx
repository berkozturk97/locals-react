import React from 'react';
import { StyledInput } from '../components/input';

export default {
  title: 'Input',
  component: StyledInput,
};

const Template = () => <StyledInput />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Input',
};
