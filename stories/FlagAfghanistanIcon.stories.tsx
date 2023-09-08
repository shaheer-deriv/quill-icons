import type { Meta, StoryObj } from '@storybook/react';

import { FlagAfghanistanIcon } from '../src/react/flags';

const meta = {
  title: 'flags/FlagAfghanistanIcon',
  component: FlagAfghanistanIcon,
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
} satisfies Meta<typeof FlagAfghanistanIcon>;

export default meta;

type Story = StoryObj<typeof FlagAfghanistanIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
