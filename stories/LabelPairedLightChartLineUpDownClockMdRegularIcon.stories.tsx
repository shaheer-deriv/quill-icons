import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLightChartLineUpDownClockMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLightChartLineUpDownClockMdRegularIcon',
  component: LabelPairedLightChartLineUpDownClockMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedLightChartLineUpDownClockMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLightChartLineUpDownClockMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
