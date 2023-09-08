import type { Meta, StoryObj } from '@storybook/react';

import { FlagPlaceholderIcon } from '../src/react/flags';

const meta = {
  title: 'flags/FlagPlaceholderIcon',
  component: FlagPlaceholderIcon,
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
} satisfies Meta<typeof FlagPlaceholderIcon>;

export default meta;

type Story = StoryObj<typeof FlagPlaceholderIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
