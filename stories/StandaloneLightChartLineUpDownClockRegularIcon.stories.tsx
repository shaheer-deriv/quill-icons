import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneLightChartLineUpDownClockRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneLightChartLineUpDownClockRegularIcon',
  component: StandaloneLightChartLineUpDownClockRegularIcon,
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
} satisfies Meta<typeof StandaloneLightChartLineUpDownClockRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneLightChartLineUpDownClockRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
