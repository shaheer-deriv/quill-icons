import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneChartTrendSidewayBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneChartTrendSidewayBoldIcon',
  component: StandaloneChartTrendSidewayBoldIcon,
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
} satisfies Meta<typeof StandaloneChartTrendSidewayBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneChartTrendSidewayBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
