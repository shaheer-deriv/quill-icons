import type { Meta, StoryObj } from '@storybook/react';

import { FlagEuroIcon } from '../src/react/Flags';

const meta = {
  title: 'Flags/FlagEuroIcon',
  component: FlagEuroIcon,
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
} satisfies Meta<typeof FlagEuroIcon>;

export default meta;

type Story = StoryObj<typeof FlagEuroIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
