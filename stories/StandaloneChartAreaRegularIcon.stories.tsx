import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneChartAreaRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneChartAreaRegularIcon',
  component: StandaloneChartAreaRegularIcon,
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
} satisfies Meta<typeof StandaloneChartAreaRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneChartAreaRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
