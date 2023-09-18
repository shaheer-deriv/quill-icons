import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleStarRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleStarRegularIcon',
  component: StandaloneCircleStarRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleStarRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleStarRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
