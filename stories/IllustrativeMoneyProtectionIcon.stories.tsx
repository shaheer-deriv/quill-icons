import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeMoneyProtectionIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeMoneyProtectionIcon',
  component: IllustrativeMoneyProtectionIcon,
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
} satisfies Meta<typeof IllustrativeMoneyProtectionIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeMoneyProtectionIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
