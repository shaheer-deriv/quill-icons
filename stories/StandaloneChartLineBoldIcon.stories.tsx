import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneChartLineBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneChartLineBoldIcon',
  component: StandaloneChartLineBoldIcon,
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
} satisfies Meta<typeof StandaloneChartLineBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneChartLineBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
