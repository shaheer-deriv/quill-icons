import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleTwoRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleTwoRegularIcon',
  component: StandaloneCircleTwoRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleTwoRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleTwoRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
