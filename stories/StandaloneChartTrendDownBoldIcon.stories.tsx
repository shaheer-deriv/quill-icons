import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneChartTrendDownBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneChartTrendDownBoldIcon',
  component: StandaloneChartTrendDownBoldIcon,
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
} satisfies Meta<typeof StandaloneChartTrendDownBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneChartTrendDownBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
