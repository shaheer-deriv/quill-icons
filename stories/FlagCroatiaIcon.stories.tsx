import type { Meta, StoryObj } from '@storybook/react';

import { FlagCroatiaIcon } from '../src/react/Flags';

const meta = {
  title: 'Flags/FlagCroatiaIcon',
  component: FlagCroatiaIcon,
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
} satisfies Meta<typeof FlagCroatiaIcon>;

export default meta;

type Story = StoryObj<typeof FlagCroatiaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
