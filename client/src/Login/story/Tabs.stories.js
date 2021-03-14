import React from 'react';
import TabsComponent from '../components/Tabs';

const tabs = [
  {
    label: 'SIGN IN',
    element: 'sign in tab',
  },
  {
    label: 'SIGN UP',
    element: 'sign up tab',
  },
];
export default {
  title: 'Components/Tabs',
  component: TabsComponent,
  args: {
    tabs,
  },
};

export const Tabs = (args) => <TabsComponent {...args} />;
