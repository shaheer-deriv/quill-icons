import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneChartTrendDownRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneChartTrendDownRegularIcon',
  component: StandaloneChartTrendDownRegularIcon,
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
} satisfies Meta<typeof StandaloneChartTrendDownRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneChartTrendDownRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
