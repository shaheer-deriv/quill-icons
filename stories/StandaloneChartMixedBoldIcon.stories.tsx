import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneChartMixedBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneChartMixedBoldIcon',
  component: StandaloneChartMixedBoldIcon,
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
} satisfies Meta<typeof StandaloneChartMixedBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneChartMixedBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
