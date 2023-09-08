import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneChartCandlestickBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneChartCandlestickBoldIcon',
  component: StandaloneChartCandlestickBoldIcon,
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
} satisfies Meta<typeof StandaloneChartCandlestickBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneChartCandlestickBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
