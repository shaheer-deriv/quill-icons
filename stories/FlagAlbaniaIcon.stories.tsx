import type { Meta, StoryObj } from '@storybook/react';

import { FlagAlbaniaIcon } from '../src/react/flags';

const meta = {
  title: 'flags/FlagAlbaniaIcon',
  component: FlagAlbaniaIcon,
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
} satisfies Meta<typeof FlagAlbaniaIcon>;

export default meta;

type Story = StoryObj<typeof FlagAlbaniaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
