import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeSignUpIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeSignUpIcon',
  component: IllustrativeSignUpIcon,
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
} satisfies Meta<typeof IllustrativeSignUpIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeSignUpIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
