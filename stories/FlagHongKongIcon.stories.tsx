import type { Meta, StoryObj } from '@storybook/react';

import { FlagHongKongIcon } from '../src/react/Flags';

const meta = {
  title: 'Flags/FlagHongKongIcon',
  component: FlagHongKongIcon,
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
} satisfies Meta<typeof FlagHongKongIcon>;

export default meta;

type Story = StoryObj<typeof FlagHongKongIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
