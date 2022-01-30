import React from 'react';
import { AddButton, CountButton, StyledButton } from '../components/button';

export default {
  title: 'Buttons',
  component: StyledButton,
};

export const StyledButtonStory = () => <StyledButton>Mug</StyledButton>;

export const AddButtonStory = () => <AddButton>Add</AddButton>;

export const CountButtonStory = () => <CountButton>+</CountButton>;
