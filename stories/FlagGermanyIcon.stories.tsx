import type { Meta, StoryObj } from '@storybook/react';

import { FlagGermanyIcon } from '../src/react/Flags';

const meta = {
  title: 'Flags/FlagGermanyIcon',
  component: FlagGermanyIcon,
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
} satisfies Meta<typeof FlagGermanyIcon>;

export default meta;

type Story = StoryObj<typeof FlagGermanyIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
