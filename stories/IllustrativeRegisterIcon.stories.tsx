import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeRegisterIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeRegisterIcon',
  component: IllustrativeRegisterIcon,
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
} satisfies Meta<typeof IllustrativeRegisterIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeRegisterIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
