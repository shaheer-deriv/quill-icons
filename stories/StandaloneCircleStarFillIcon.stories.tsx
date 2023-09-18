import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleStarFillIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleStarFillIcon',
  component: StandaloneCircleStarFillIcon,
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
} satisfies Meta<typeof StandaloneCircleStarFillIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleStarFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
