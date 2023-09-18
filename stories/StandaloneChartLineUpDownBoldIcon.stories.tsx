import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneChartLineUpDownBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneChartLineUpDownBoldIcon',
  component: StandaloneChartLineUpDownBoldIcon,
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
} satisfies Meta<typeof StandaloneChartLineUpDownBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneChartLineUpDownBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
