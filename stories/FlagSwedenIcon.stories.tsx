import type { Meta, StoryObj } from '@storybook/react';

import { FlagSwedenIcon } from '../src/react/Flags';

const meta = {
  title: 'Flags/FlagSwedenIcon',
  component: FlagSwedenIcon,
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
} satisfies Meta<typeof FlagSwedenIcon>;

export default meta;

type Story = StoryObj<typeof FlagSwedenIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
