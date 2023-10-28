import type { Meta, StoryObj } from '@storybook/react';

import { FlagBoliviaIcon } from '../src/react/Flags';

const meta = {
  title: 'Flags/FlagBoliviaIcon',
  component: FlagBoliviaIcon,
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
} satisfies Meta<typeof FlagBoliviaIcon>;

export default meta;

type Story = StoryObj<typeof FlagBoliviaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
