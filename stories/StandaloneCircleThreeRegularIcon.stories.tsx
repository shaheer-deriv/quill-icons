import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleThreeRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleThreeRegularIcon',
  component: StandaloneCircleThreeRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleThreeRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleThreeRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
