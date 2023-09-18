import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeHighIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeHighIcon',
  component: IllustrativeHighIcon,
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
} satisfies Meta<typeof IllustrativeHighIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeHighIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
