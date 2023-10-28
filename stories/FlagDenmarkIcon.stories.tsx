import type { Meta, StoryObj } from '@storybook/react';

import { FlagDenmarkIcon } from '../src/react/Flags';

const meta = {
  title: 'Flags/FlagDenmarkIcon',
  component: FlagDenmarkIcon,
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
} satisfies Meta<typeof FlagDenmarkIcon>;

export default meta;

type Story = StoryObj<typeof FlagDenmarkIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
