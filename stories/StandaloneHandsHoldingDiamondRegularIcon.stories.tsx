import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneHandsHoldingDiamondRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneHandsHoldingDiamondRegularIcon',
  component: StandaloneHandsHoldingDiamondRegularIcon,
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
} satisfies Meta<typeof StandaloneHandsHoldingDiamondRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneHandsHoldingDiamondRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
