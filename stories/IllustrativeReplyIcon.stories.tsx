import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeReplyIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeReplyIcon',
  component: IllustrativeReplyIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: { control: { type: 'color' } },
    iconSize: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IllustrativeReplyIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeReplyIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
