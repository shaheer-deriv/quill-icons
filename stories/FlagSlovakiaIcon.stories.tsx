import type { Meta, StoryObj } from '@storybook/react';

import { FlagSlovakiaIcon } from '../src/react/Flags';

const meta = {
  title: 'Flags/FlagSlovakiaIcon',
  component: FlagSlovakiaIcon,
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
} satisfies Meta<typeof FlagSlovakiaIcon>;

export default meta;

type Story = StoryObj<typeof FlagSlovakiaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
