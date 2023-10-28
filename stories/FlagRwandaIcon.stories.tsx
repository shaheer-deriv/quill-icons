import type { Meta, StoryObj } from '@storybook/react';

import { FlagRwandaIcon } from '../src/react/Flags';

const meta = {
  title: 'Flags/FlagRwandaIcon',
  component: FlagRwandaIcon,
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
} satisfies Meta<typeof FlagRwandaIcon>;

export default meta;

type Story = StoryObj<typeof FlagRwandaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
