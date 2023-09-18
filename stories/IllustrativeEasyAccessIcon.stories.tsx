import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeEasyAccessIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeEasyAccessIcon',
  component: IllustrativeEasyAccessIcon,
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
} satisfies Meta<typeof IllustrativeEasyAccessIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeEasyAccessIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
