import React from 'react';
import TabsComponent from '../components/Tabs';

const tabs = [
  {
    label: 'LOGIN',
    element: 'log in tab',
  },
  {
    label: 'SIGNIN',
    element: 'sign in tab',
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
