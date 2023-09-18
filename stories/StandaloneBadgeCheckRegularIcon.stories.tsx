import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneBadgeCheckRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneBadgeCheckRegularIcon',
  component: StandaloneBadgeCheckRegularIcon,
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
} satisfies Meta<typeof StandaloneBadgeCheckRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneBadgeCheckRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
