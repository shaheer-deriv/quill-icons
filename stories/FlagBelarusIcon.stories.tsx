import type { Meta, StoryObj } from '@storybook/react';

import { FlagBelarusIcon } from '../src/react/flags';

const meta = {
  title: 'flags/FlagBelarusIcon',
  component: FlagBelarusIcon,
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
} satisfies Meta<typeof FlagBelarusIcon>;

export default meta;

type Story = StoryObj<typeof FlagBelarusIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
