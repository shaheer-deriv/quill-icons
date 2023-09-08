import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneMemoCircleCheckRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneMemoCircleCheckRegularIcon',
  component: StandaloneMemoCircleCheckRegularIcon,
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
} satisfies Meta<typeof StandaloneMemoCircleCheckRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneMemoCircleCheckRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
