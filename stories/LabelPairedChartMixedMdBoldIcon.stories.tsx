import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChartMixedMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChartMixedMdBoldIcon',
  component: LabelPairedChartMixedMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedChartMixedMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChartMixedMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
