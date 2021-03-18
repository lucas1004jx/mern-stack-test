import React from 'react';
import FormComponent from '../components/SignUpForm';

export default {
  title: 'Components/Form',
  component: FormComponent,
  argTypes: {
    type: {
      defaultValue: 'signIn',
      control: {
        type: 'inline-radio',
        options: ['signIn', 'signUp'],
      },
    },
  },
};

export const Form = (args) => <FormComponent {...args} />;
