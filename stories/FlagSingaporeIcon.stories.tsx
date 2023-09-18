import type { Meta, StoryObj } from '@storybook/react';

import { FlagSingaporeIcon } from '../src/react/Flag';

const meta = {
  title: 'Flags/FlagSingaporeIcon',
  component: FlagSingaporeIcon,
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
} satisfies Meta<typeof FlagSingaporeIcon>;

export default meta;

type Story = StoryObj<typeof FlagSingaporeIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
