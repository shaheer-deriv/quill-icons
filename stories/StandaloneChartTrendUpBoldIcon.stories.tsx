import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneChartTrendUpBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneChartTrendUpBoldIcon',
  component: StandaloneChartTrendUpBoldIcon,
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
} satisfies Meta<typeof StandaloneChartTrendUpBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneChartTrendUpBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
