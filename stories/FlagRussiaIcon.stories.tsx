import type { Meta, StoryObj } from '@storybook/react';

import { FlagRussiaIcon } from '../src/react/Flags';

const meta = {
  title: 'Flags/FlagRussiaIcon',
  component: FlagRussiaIcon,
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
} satisfies Meta<typeof FlagRussiaIcon>;

export default meta;

type Story = StoryObj<typeof FlagRussiaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
