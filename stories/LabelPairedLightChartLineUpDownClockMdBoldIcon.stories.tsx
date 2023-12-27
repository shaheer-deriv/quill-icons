import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLightChartLineUpDownClockMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLightChartLineUpDownClockMdBoldIcon',
  component: LabelPairedLightChartLineUpDownClockMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedLightChartLineUpDownClockMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLightChartLineUpDownClockMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
