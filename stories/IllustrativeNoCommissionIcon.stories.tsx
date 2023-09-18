import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeNoCommissionIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeNoCommissionIcon',
  component: IllustrativeNoCommissionIcon,
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
} satisfies Meta<typeof IllustrativeNoCommissionIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeNoCommissionIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
