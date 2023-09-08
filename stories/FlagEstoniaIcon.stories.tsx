import type { Meta, StoryObj } from '@storybook/react';

import { FlagEstoniaIcon } from '../src/react/flags';

const meta = {
  title: 'flags/FlagEstoniaIcon',
  component: FlagEstoniaIcon,
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
} satisfies Meta<typeof FlagEstoniaIcon>;

export default meta;

type Story = StoryObj<typeof FlagEstoniaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
