import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneMoonRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneMoonRegularIcon',
  component: StandaloneMoonRegularIcon,
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
} satisfies Meta<typeof StandaloneMoonRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneMoonRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
