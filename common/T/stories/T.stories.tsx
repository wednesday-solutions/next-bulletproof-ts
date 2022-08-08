import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import T from '../index';

export default {
  title: 'T',
  component: T,
} as ComponentMeta<typeof T>;

const Template: ComponentStory<typeof T> = (args) => <T {...args} />

export const Default = Template.bind({});
Default.args = {
    id: 'hello_world'
}