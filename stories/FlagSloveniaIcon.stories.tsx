import type { Meta, StoryObj } from '@storybook/react';

import { FlagSloveniaIcon } from '../src/react/Flags';

const meta = {
  title: 'Flags/FlagSloveniaIcon',
  component: FlagSloveniaIcon,
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
} satisfies Meta<typeof FlagSloveniaIcon>;

export default meta;

type Story = StoryObj<typeof FlagSloveniaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
