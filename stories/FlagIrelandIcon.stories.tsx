import type { Meta, StoryObj } from '@storybook/react';

import { FlagIrelandIcon } from '../src/react/flags';

const meta = {
  title: 'flags/FlagIrelandIcon',
  component: FlagIrelandIcon,
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
} satisfies Meta<typeof FlagIrelandIcon>;

export default meta;

type Story = StoryObj<typeof FlagIrelandIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
