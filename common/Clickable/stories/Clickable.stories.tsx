import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Clickable from '../index';

export default {
  title: 'Clickable',
  component: Clickable,
} as ComponentMeta<typeof Clickable>;

const Template: ComponentStory<typeof Clickable> = (args) => <Clickable {...args} />

export const Default = Template.bind({});
Default.args = {
    textId: 'i_am_clickable'
}