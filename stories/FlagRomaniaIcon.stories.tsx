import type { Meta, StoryObj } from '@storybook/react';

import { FlagRomaniaIcon } from '../src/react/Flags';

const meta = {
  title: 'Flags/FlagRomaniaIcon',
  component: FlagRomaniaIcon,
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
} satisfies Meta<typeof FlagRomaniaIcon>;

export default meta;

type Story = StoryObj<typeof FlagRomaniaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
