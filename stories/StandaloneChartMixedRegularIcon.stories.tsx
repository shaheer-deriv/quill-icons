import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneChartMixedRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneChartMixedRegularIcon',
  component: StandaloneChartMixedRegularIcon,
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
} satisfies Meta<typeof StandaloneChartMixedRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneChartMixedRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
