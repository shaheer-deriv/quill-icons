import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativePayoutIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativePayoutIcon',
  component: IllustrativePayoutIcon,
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
} satisfies Meta<typeof IllustrativePayoutIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativePayoutIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
