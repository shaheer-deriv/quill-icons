import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneStopLossRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneStopLossRegularIcon',
  component: StandaloneStopLossRegularIcon,
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
} satisfies Meta<typeof StandaloneStopLossRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneStopLossRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
