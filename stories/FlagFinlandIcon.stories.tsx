import type { Meta, StoryObj } from '@storybook/react';

import { FlagFinlandIcon } from '../src/react/Flags';

const meta = {
  title: 'Flags/FlagFinlandIcon',
  component: FlagFinlandIcon,
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
} satisfies Meta<typeof FlagFinlandIcon>;

export default meta;

type Story = StoryObj<typeof FlagFinlandIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
