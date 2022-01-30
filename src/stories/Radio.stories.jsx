import React from 'react';
import { StyledRadio } from '../components/radio';

export default {
  title: 'Radio',
  component: StyledRadio,
};

const Template = () => <StyledRadio />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Radio',
};
