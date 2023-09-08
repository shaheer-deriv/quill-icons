import type { Meta, StoryObj } from '@storybook/react';

import { FlagIndonesiaIcon } from '../src/react/flags';

const meta = {
  title: 'flags/FlagIndonesiaIcon',
  component: FlagIndonesiaIcon,
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
} satisfies Meta<typeof FlagIndonesiaIcon>;

export default meta;

type Story = StoryObj<typeof FlagIndonesiaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
