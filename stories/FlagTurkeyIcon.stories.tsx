import type { Meta, StoryObj } from '@storybook/react';

import { FlagTurkeyIcon } from '../src/react/Flag';

const meta = {
  title: 'Flags/FlagTurkeyIcon',
  component: FlagTurkeyIcon,
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
} satisfies Meta<typeof FlagTurkeyIcon>;

export default meta;

type Story = StoryObj<typeof FlagTurkeyIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
