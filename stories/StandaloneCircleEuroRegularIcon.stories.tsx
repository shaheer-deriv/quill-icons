import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleEuroRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleEuroRegularIcon',
  component: StandaloneCircleEuroRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleEuroRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleEuroRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
