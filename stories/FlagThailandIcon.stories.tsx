import type { Meta, StoryObj } from '@storybook/react';

import { FlagThailandIcon } from '../src/react/Flags';

const meta = {
  title: 'Flags/FlagThailandIcon',
  component: FlagThailandIcon,
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
} satisfies Meta<typeof FlagThailandIcon>;

export default meta;

type Story = StoryObj<typeof FlagThailandIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
