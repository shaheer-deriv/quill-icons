import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleSevenRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleSevenRegularIcon',
  component: StandaloneCircleSevenRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleSevenRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleSevenRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
